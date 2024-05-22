import Header from '@/components/layouts/header';
import React, { useEffect, useState } from 'react';
import Request from '@/api/request';
import { useSelector } from 'react-redux';

const PrimaryLayout = ({ children }) => {
  const language = useSelector((state) => state.language.lang);
  React.useEffect(() => {
    if (language === 'fa') {
      document.body.style.fontFamily = 'b-nazanin';
    } else {
      document.body.style.fontFamily = 'Roboto, sans-serif';
    }
  }, [language]);
  return (
    <>
      <Header />
      <main id="main">{children}</main>
    </>
  );
};

export default PrimaryLayout;
