export const baseUrlApi = 
process.env.NODE_ENV === 'production' ? 
  process.env.REACT_APP_BASE_URL_API_PRODUCTION_SERVER :
  process.env.REACT_APP_BASE_URL_API_LOCAL_SERVER;

export const callbackUrlYandexOauth =
  process.env.NODE_ENV === 'production' ? 
  'https%3A%2F%2Fkovhub.github.io%2Fdemo-metric%2F' :
  'http%3A%2F%2Flocalhost%3A3000';

export const clientIdYandexOauth = 'b5f89edcd2d044a194abaf7d8c320afe';

export const forceСonfirmPermissionsYandexOauth = 'false';