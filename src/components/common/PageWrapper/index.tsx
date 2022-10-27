import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';

import style from './PageWrapper.module.scss';
import Menu from '../../Menu';

const PageWrapper = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <div className={style.page__content}>
        <Menu />
        <main className={style.content}><Outlet /></main>
      </div>
    </div>
  );
};

export default PageWrapper;
