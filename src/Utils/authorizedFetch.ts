// authorizedFetch.ts
export async function authorizedFetch(input: RequestInfo, init: RequestInit = {}) {
  // read token from localStorage (or you can import/use useAuth in components)
  const token = localStorage.getItem("authToken") || "";

  const headers = new Headers(init.headers || {});
  if (token) headers.set("Authorization", `Bearer ${token.trim()}`); // set header
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const response = await fetch(input, { ...init, headers });

  // If server returns 401, token may be invalid/expired — clear token and optionally redirect
  if (response.status === 401) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("verifyToken"); // Also clear the verify token
    // optionally: window.location.href = "/login";
  }

  return response;
}