import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function ETC() {
  const meta = setMetaData({
    title: 'ETC',
    url: '/etc',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>κΈ°ν μν</div>
      </AppLayout>
    </>
  );
}
