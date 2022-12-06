import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Agreement() {
  const meta = setMetaData({
    title: '이용약관 & 개인정보처리방침',
    url: '/agree',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>약관 동의</div>
        <div>개인정보 처리방침</div>
      </AppLayout>
    </>
  );
}
