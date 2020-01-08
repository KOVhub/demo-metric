export const baseUrlApi = 
process.env.NODE_ENV === 'production' ? 
  process.env.REACT_APP_BASE_URL_API_PRODUCTION_SERVER :
  process.env.REACT_APP_BASE_URL_API_LOCAL_SERVER;