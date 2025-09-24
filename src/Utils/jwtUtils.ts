// Browser-compatible JWT implementation
const JWT_SECRET = '$2a$12$JcUcBguLgnOQp6mYDMLUAeG7D10MEXB/4ixiiAZLUYo8hBXymm8b2';
const TOKEN_EXPIRY = 300;  // Increased from 60 seconds to 1 hour

// Payload interface
interface JwtPayload {
  version_name: string;
  version_code: string;
  device_id: string;
  device_type: 'android' | 'ios' | 'web';
  device_model: string;
  iat?: number;
  exp?: number;
}

/**
 * Convert string to ArrayBuffer
 */
function stringToArrayBuffer(str: string): ArrayBuffer {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}

/**
 * Convert ArrayBuffer to base64 URL encoded string
 */
function arrayBufferToBase64Url(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Convert base64 URL encoded string to ArrayBuffer
 */
function base64UrlToArrayBuffer(base64Url: string): ArrayBuffer {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

/**
 * Generate HMAC signature using Web Crypto API
 */
async function generateSignature(key: string, data: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const keyData = encoder.encode(key);
  const dataBytes = encoder.encode(data);
  
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  return await crypto.subtle.sign('HMAC', cryptoKey, dataBytes);
}

/**
 * Create a JWT header
 */
function createHeader(): string {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  };
  return arrayBufferToBase64Url(stringToArrayBuffer(JSON.stringify(header)));
}

/**
 * Create a JWT payload with expiry
 */
function createPayload(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  const now = Math.floor(Date.now() / 1000);
  const fullPayload = {
    ...payload,
    iat: now,
    exp: now + TOKEN_EXPIRY
  };
  return arrayBufferToBase64Url(stringToArrayBuffer(JSON.stringify(fullPayload)));
}

/**
 * Generate a JWT token with the specified payload
 * @param payload - The payload to include in the token
 * @returns The signed JWT token
 */
export async function generateToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): Promise<string> {
  const header = createHeader();
  const payloadEncoded = createPayload(payload);
  const data = `${header}.${payloadEncoded}`;
  
  const signature = await generateSignature(JWT_SECRET, data);
  const signatureEncoded = arrayBufferToBase64Url(signature);
  
  return `${data}.${signatureEncoded}`;
}

export function isTokenExpired(token: string): boolean {
  try {
    if (!token) return true;
    
    const parts = token.split('.');
    if (parts.length !== 3) {
      return true;
    }
    
    // Decode the payload (second part)
    const payload = parts[1];
    const decodedPayload = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
    const payloadObj = JSON.parse(decodedPayload);
    
    // Check expiry with buffer
    const now = Math.floor(Date.now() / 1000);
    return payloadObj.exp ? payloadObj.exp - TOKEN_EXPIRY < now : true;
  } catch (error) {
    console.error('Error checking token expiry:', error);
    return true;
  }
}

export function getValidToken(): string | null {
  const token = localStorage.getItem("authToken");
  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("authToken");
    return null;
  }
  return token;
}

/**
 * Verify a JWT token (simplified verification)
 * @param token - The token to verify
 * @returns The decoded payload if valid, null otherwise
 */
export async function verifyToken(token: string): Promise<JwtPayload | null> {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) {
      return null;
    }
    
    const [header, payload, signature] = parts;
    
    // Verify signature
    const data = `${header}.${payload}`;
    const signatureBuffer = base64UrlToArrayBuffer(signature);
    
    const keyData = stringToArrayBuffer(JWT_SECRET);
    const cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    
    const isValid = await crypto.subtle.verify('HMAC', cryptoKey, signatureBuffer, stringToArrayBuffer(data));
    
    if (!isValid) {
      return null;
    }
    
    // Decode payload
    const payloadBuffer = base64UrlToArrayBuffer(payload);
    const decoder = new TextDecoder();
    const payloadString = decoder.decode(payloadBuffer);
    const payloadObj = JSON.parse(payloadString) as JwtPayload;
    
    // Check expiry
    const now = Math.floor(Date.now() / 1000);
    if (payloadObj.exp && payloadObj.exp < now) {
      return null; // Token expired
    }
    
    return payloadObj;
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}