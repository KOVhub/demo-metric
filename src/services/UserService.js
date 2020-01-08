import { baseUrlApi } from './configurationServer';

export default class UserService {

  _baseUrlApi = baseUrlApi;

  sendCodeToServer = async(code) => {
    let data = new FormData();
    data.append('code', code);
    
    const response = await fetch(`${this._baseUrlApi}/code`,{
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: data
    });

    if (!response.ok) {
      return {
        errorCode: response.status,
        errorMessage: 'Внутренняя ошибка сервера'
      }
    }

    const user = await response.json();
    return this._mapUser(user);
  }

  handleErrorsReceivingCode = (errorCode) => {
    switch (errorCode) {
      case 'access_denied':
        return 'Вы запретили доступ приложению к данным Яндекс аккаунта. Необходимо повторно нажать Войти и после входа в нужный Яндекс аккаунт нажать Разрешить для доступа приложения к данным на Яндексе.';
      case 'unauthorized_client':
        return 'Вы запретили доступ приложению к данным Яндекс аккаунта. Необходимо повторно нажать Войти и после входа в нужный Яндекс аккаунт нажать Разрешить для доступа приложения к данным на Яндексе.';
      default:
        return '';
    }
  }

  handleErrorsSendingCode = (errorCode) => {
    switch (errorCode) {
      case 'authorization_pending':
        return 'Пользователь еще не ввел код подтверждения.';
      case 'bad_verification_code':
        return 'Переданное значение параметра code не является 7-значным числом.';
      case 'invalid_client':
        return 'Приложение с указанным идентификатором (параметр client_id) не найдено или заблокировано. Этот код также возвращается, если в параметре client_secret передан неверный пароль приложения.';
      case 'invalid_grant':
        return 'Неверный или просроченный код подтверждения.';
      case 'invalid_request':
        return 'Неверный формат запроса (один из параметров не указан, указан дважды, или передан не в теле запроса).';
      case 'invalid_scope':
        return 'Права приложения изменились после генерации кода подтверждения.';
      case 'unauthorized_client':
        return 'Приложение было отклонено при модерации или только ожидает ее.';
      case 'unsupported_grant_type':
        return 'Недопустимое значение параметра grant_type.';
      case 'Basic auth required':
        return 'Тип авторизации, указанный в заголовке Authorization, отличен от Basic.';
      case 'Malformed Authorization header':
        return 'Заголовок Authorization не соответствует формату <client_id>:<client_secret>, или эта строка не закодирована методом base64.';
      default:
        return '';
    }
  }

  _mapUser = (user) => {
    return {
      isAvatarEmpty: user.avatarEmpty,
      avatarId: user.default_avatar_id,
      login: user.login
    };
  };

}