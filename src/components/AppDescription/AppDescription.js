import React from 'react';

import './appDescription.css'
import catImage from './catDescriptionAppImage.svg';

const AppDescription = () => {
  return (
    <div className='app-description'>
      <p className='app-description-title'>Обнови свои отчеты Яндекс Метрики быстро и удобно</p>
      <ul className='timeline-stages'>
        <li className='timeline-stages-item'>Войди в свой Яндекс с помощью кнопки Войти</li>
        <li className='timeline-stages-item'>Загрузи Excel файлы</li>
        <li className='timeline-stages-item'>Выбери из списка нужные счетчики</li>
        <li className='timeline-stages-item'>Соотнеси выбранные счетчики и загруженные файлы путем перетаскивания нужного счетчика в загруженный файл</li>
        <li className='timeline-stages-item'>Выбери из списка нужные метрики</li>
        <li className='timeline-stages-item'>Укажи период отчета</li>
        <li className='timeline-stages-item'>Нажми кнопку Получить результаты метрик</li>
      </ul>
      <div className='app-description-image-wrapper'>
        <img src={catImage} className='app-description-image' alt='cat with laptop'/>
      </div>
    </div>

  )
}
export default AppDescription;