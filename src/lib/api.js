const LOCAL_API_URL = 'http://localhost:5000'
const PRODUCTION_API_URL = 'https://api.aethersystems.co.za'

export function getApiBase() {
  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()

  if (configuredApiUrl) {
    return configuredApiUrl.replace(/\/$/, '')
  }

  return import.meta.env.DEV ? LOCAL_API_URL : PRODUCTION_API_URL
}
