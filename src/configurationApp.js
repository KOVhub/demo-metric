export const baseUrlApi = 
process.env.NODE_ENV === 'production' ? 
  process.env.REACT_APP_BASE_URL_API_PRODUCTION_SERVER :
  process.env.REACT_APP_BASE_URL_API_LOCAL_SERVER;

export const callbackUrlYandexOauth =
  process.env.NODE_ENV === 'production' ? 
  'https://kovhub.github.io/demo-metric/' :
  'http://localhost:3000';

export const clientIdYandexOauth = 'b5f89edcd2d044a194abaf7d8c320afe';

export const accountSelectionYandexOauth =
  process.env.NODE_ENV === 'production' ? 
  'true' :
  'false';