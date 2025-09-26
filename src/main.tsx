import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartContext.tsx';
import { AuthProvider } from './Auth/AuthProvider.tsx';
import { fetchConfig } from './services/footerService'

async function initializeApp() {
  try {
    const config = await fetchConfig();
    
    // Set favicon dynamically
    const favicon = document.getElementById('dynamic-favicon') as HTMLLinkElement | null;
    if (favicon) {
      favicon.href = config.data.logo_image;
    } else {
      const link = document.createElement('link');
      link.id = 'dynamic-favicon';
      link.rel = 'icon';
      link.href = config.data.logo_image;
      document.head.appendChild(link);
    }
  } catch (error) {
    console.error('Failed to fetch config or set favicon:', error);
    // Fallback to default favicon
    const link = document.createElement('link');
    link.id = 'dynamic-favicon';
    link.rel = 'icon';
    link.href = '/vite.svg';
    document.head.appendChild(link);
  }
}
initializeApp()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <AuthProvider>
    <CartProvider>
      <App />
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
