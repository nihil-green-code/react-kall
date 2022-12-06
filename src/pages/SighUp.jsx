import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function SighUp() {
  const meta = setMetaData({
    title: '회원가입',
    url: '/sighup',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>회원가입</div>
      </AppLayout>
    </>
  );
}
