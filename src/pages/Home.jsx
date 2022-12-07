import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='test'>테스트 페이지</Link>
      </AppLayout>
    </>
  );
}
