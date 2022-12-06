import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function NotFound() {
  const meta = setMetaData({
    title: '404 에러',
    url: '/404',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>페이지를 찾을 수 없습니다.</div>
      </AppLayout>
    </>
  );
}
