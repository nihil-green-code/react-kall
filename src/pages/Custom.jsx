import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Custom() {
  const meta = setMetaData({
    title: '주문제작 케이크',
    url: '/custom',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>주문제작 케이크</div>
      </AppLayout>
    </>
  );
}
