import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import { withUserService } from '../HOC';
import { compose } from '../../helpers';
import { userSignIn, userSignUp } from '../../actions';
import { clientIdYandexOauth, callbackUrlYandexOauth, accountSelectionYandexOauth } from '../../configurationApp';

import 'react-toastify/dist/ReactToastify.css';
import './appHeader.css';
import metricatIcon from './metricatIcon.svg';
import defaultUserAvatar from './defaultUserAvatar.svg';

class AppHeader extends Component {

  toastId = null;

  componentDidMount = () => {
    const { userService } = this.props;

    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    const errorCode = params.get('error');

    if(code) {
      this.toastId = toast.warn("Происходит вход в Ваш аккаунт", { 
        autoClose: false
      });

      const { userSignIn } = this.props;
      userService.sendCodeToServer(code)
      .then((user) => {
        if(user.login) {
          userSignIn(user)
          toast.update(this.toastId, {
            type: toast.TYPE.SUCCESS,
            render: "Вы успешно вошли в профиль",
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })

          // toast.success("Вы успешно вошли в профиль", {
          //   position: "top-right",
          //   autoClose: 4000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          // });
        }
      })
      .catch((error) => {
        toast.update(this.toastId, {
          type: toast.TYPE.ERROR,
          render: error.message,
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      });

    }

    if(errorCode) {
      let errorMessage = userService.handleErrorsReceivingCode(errorCode);
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
    const { user, loading, hasError, error, userSignUp } = this.props;
    let content, avatarUrl;

    if (user) {
      const { isAvatarEmpty, avatarId, login } = user;
      if(isAvatarEmpty) {
        avatarUrl = defaultUserAvatar;
      } else {
        avatarUrl = `https://avatars.yandex.net/get-yapic/${avatarId}/islands-50`;
      }
      content = (
        <div className='header-user'>
          <div className='header-user-avatar'>
            <img className='header-user-avatar-img' src={avatarUrl} alt='Фото профиля' />
          </div>
          <span className='header-user-login' title={login}>{login}</span>
          <button onClick={userSignUp} className='button-signin-signup' type='button' title='Выйти из профиля'>Выйти</button>
        </div>
      )
    } else {
      content = (
        <div className='header-user'>
          <a
            href={`https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientIdYandexOauth}&redirect_uri=${callbackUrlYandexOauth}&force_confirm=${accountSelectionYandexOauth}`}
            className='button-signin-signup'
            title='Войти в профиль'>
            Войти
          </a>
        </div>
      )
    }
  
    return (
      <header className='main-header'>
        {/* <Link to='/' className='logo-link' title='Вернуться на главную страницу'> */}
        <a href='/' className='logo-link' title='Вернуться на главную страницу'>
          <img src={metricatIcon} className='logo-link-icon' alt='Логотип Метрикот' />
          <h1 className='logo-link-title'>Метрикот</h1>
        {/* </Link> */}
        </a>
        {content}
      </header>
    )
  }
}

const mapStateToProps = ({ user: {user, loading, hasError, error} }) => {
  return { user, loading, hasError, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignIn: (user) => dispatch(userSignIn(user)),
    userSignUp: () => dispatch(userSignUp())
  };
};

export default compose(
  withUserService(),
  connect(mapStateToProps, mapDispatchToProps)
)(AppHeader);