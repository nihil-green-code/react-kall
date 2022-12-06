import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Community() {
  const meta = setMetaData({
    title: '커뮤니티',
    url: '/community',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>커뮤니티</div>
      </AppLayout>
    </>
  );
}
