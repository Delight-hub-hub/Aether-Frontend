const LOCAL_API_URL = 'http://localhost:5000'

export function getApiBase() {
  const configuredApiUrl = import.meta.env.VITE_API_URL?.trim()

  if (configuredApiUrl) {
    return configuredApiUrl.replace(/\/$/, '')
  }

  if (import.meta.env.DEV) {
    return LOCAL_API_URL
  }

  return ''
}
