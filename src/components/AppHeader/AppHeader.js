import React from 'react';
// import { Link } from 'react-router-dom';
import { Button } from 'rsuite';

import './appHeader.css';
import metricatIcon from './metricatIcon.svg';
import defaultUserAvatar from './defaultUserAvatar.svg';

const AppHeader = ({ user, signIn, signUp }) => {
  
  let content, avatarUrl;
  if (user) {
    if(user.isAvatarEmpty) {
      avatarUrl = defaultUserAvatar;
    } else {
      avatarUrl = `https://avatars.yandex.net/get-yapic/${user.avatarId}/islands-50`;
    }
    content = (
      <div className='header-user'>
        <div className='header-user-avatar'>
          <img className='header-user-avatar-img' src={avatarUrl} alt='Фото профиля' />
        </div>
        <span className='header-user-login' title={user.login}>{user.login}</span>
        <button onClick={signUp} className='button-signin-signup' type='button' title='Выйти из профиля'>Выйти</button>
      </div>
    )
  } else {
    content = (
      <div className='header-user'>
        <Button appearance="ghost" ><a href='https://oauth.yandex.ru/authorize?response_type=code&client_id=b5f89edcd2d044a194abaf7d8c320afe'>Войти в профиль</a></Button>
        <button onClick={signIn} className='button-signin-signup' type='button' title='Войти в профиль'>Войти</button>
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
export default AppHeader;