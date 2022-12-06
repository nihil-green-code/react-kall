import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function SighIn() {
  const meta = setMetaData({
    title: '로그인',
    url: '/sighin',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>로그인</div>
      </AppLayout>
    </>
  );
}
