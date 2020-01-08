const userSignIn = (user) => {
  return {
    type: 'USER_SIGN_IN_SUCCESS',
    payload: user
  };
};

const userSignUp = () => {
  return {
    type: 'USER_SIGN_UP'
  };
};

export {
  userSignIn,
  userSignUp
};