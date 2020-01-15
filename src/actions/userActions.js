const userSignInRequested = () => {
  return {
    type: 'USER_SIGN_IN_REQUEST'
  };
};

const userSignInLoaded = (user) => {
  return {
    type: 'USER_SIGN_IN_SUCCESS',
    payload: user
  };
};

const userSignInError = (error) => {
  return {
    type: 'USER_SIGN_IN_FAILURE',
    payload: error
  };
};

const userSignOut = () => {
  return {
    type: 'USER_SIGN_OUT'
  };
};

export {
  userSignInRequested,
  userSignInLoaded,
  userSignInError,
  userSignOut
};