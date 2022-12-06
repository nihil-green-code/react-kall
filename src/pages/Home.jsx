import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Home() {
  const meta = setMetaData({
    title: '메인 페이지',
    url: '/',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>메인 페이지</div>
      </AppLayout>
    </>
  );
}
