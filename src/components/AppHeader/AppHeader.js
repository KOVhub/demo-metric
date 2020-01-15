import React from 'react';

import UserHeader from '../UserHeader/UserHeader';

import './appHeader.css';
import metricatIcon from './metricatIcon.svg';

const AppHeader = () => {
  return (
    <header className='main-header'>
      {/* <Link to='/' className='logo-link' title='Вернуться на главную страницу'> */}
      <a href='/' className='logo-link' title='Вернуться на главную страницу'>
        <img src={metricatIcon} className='logo-link-icon' alt='Логотип Метрикот' />
        <h1 className='logo-link-title'>Метрикот</h1>
      {/* </Link> */}
      </a>
      <UserHeader />
    </header>
  )
}

export default AppHeader;