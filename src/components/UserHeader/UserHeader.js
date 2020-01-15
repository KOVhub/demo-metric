import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from "react-toastify";

import { withUserService } from '../HOC';
import { compose } from '../../helpers';
import { userSignInRequested, userSignInLoaded, userSignInError, userSignOut } from '../../actions';
import { clientIdYandexOauth, callbackUrlYandexOauth, forceСonfirmPermissionsYandexOauth } from '../../configurationApp';

import 'react-toastify/dist/ReactToastify.css';
import './userHeader.css';
import defaultUserAvatar from './defaultUserAvatar.svg';

class UserHeader extends Component {

  componentDidMount = () => {
    const { userService } = this.props;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const errorCode = params.get('error');

    if(code) {
      const { userSignInRequested, userSignInLoaded, userSignInError } = this.props;

      userSignInRequested();
      userService.sendCodeToServer(code)
      .then((user) => {
        if(user.login) {
          userSignInLoaded(user)
        }
      })
      .catch((error) => {
        userSignInError(error.message);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      });

    }

    if(errorCode) {
      let errorMessage = userService.handleErrorsReceivingCode(errorCode);
      this.props.userSignInError(errorMessage);
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  render() {
    const { user, loading, hasError, error, userSignOut } = this.props;
    let avatarUrl;


    if(loading) {
      return (
        <div className='header-user header-user-loading'>
          <span className='header-user-loading-text'>Войти</span>
          <div class="pulse-container loader-margin">  
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      )
    }

    if(user) {
      const { isAvatarEmpty, avatarId, login } = user;
      
      if(isAvatarEmpty) {
        avatarUrl = defaultUserAvatar;
      } else {
        avatarUrl = `https://avatars.yandex.net/get-yapic/${avatarId}/islands-50`;
      }
      
      return (
        <div className='header-user'>
          <div className='header-user-avatar'>
            <img className='header-user-avatar-img' src={avatarUrl} alt='Фото профиля' />
          </div>
          <span className='header-user-login' title={login}>{login}</span>
          <button onClick={userSignOut} className='button-signin-signout button-signout' type='button' title='Выйти из профиля'>Выйти</button>
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className='header-user'>
          <a
            href={`https://passport.yandex.ru/auth/list?retpath=https%3A%2F%2Foauth.yandex.ru%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3D${clientIdYandexOauth}%26redirect_uri%3D${callbackUrlYandexOauth}%26force_confirm%3D${forceСonfirmPermissionsYandexOauth}`}
            className='button-signin-signout'
            title='Войти в профиль'>
            Войти
          </a>
        </div>
        {
          hasError && console.log(error)
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ user: {user, loading, hasError, error} }) => {
  return { user, loading, hasError, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignInRequested: () => dispatch(userSignInRequested()),
    userSignInLoaded: (user) => dispatch(userSignInLoaded(user)),
    userSignInError: (error) => dispatch(userSignInError(error)),
    userSignOut: () => dispatch(userSignOut())
  };
};

export default compose(
  withUserService(),
  connect(mapStateToProps, mapDispatchToProps)
)(UserHeader);