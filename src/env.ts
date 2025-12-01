const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;
const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error('VITE_API_URL is not set');
}

export { apiUrl, isDevelopment, isProduction };
