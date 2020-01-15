const userReducer = (state, action) => {
  if (state === undefined) {
    return {
      user: null,
      loading: false,
      hasError: false,
      error: null
    };
  }

  switch (action.type) {
    case 'USER_SIGN_IN_REQUEST':
      return {
        user: null,
        loading: true,
        hasError: false,
        error: null
      };
    case 'USER_SIGN_IN_SUCCESS':
      return {
        user: {
          isAvatarEmpty: action.payload.isAvatarEmpty,
          avatarId: action.payload.avatarId,
          login: action.payload.login,
        },
        loading: false,
        hasError: false,
        error: null
      };
    case 'USER_SIGN_IN_FAILURE':
      return {
        user: null,
        loading: false,
        hasError: true,
        error: action.payload
      };
    case 'USER_SIGN_OUT':
      return {
        user: null,
        loading: false,
        hasError: false,
        error: null
      };
    default:
      return state.user;
  }
};

export default userReducer;