import React from 'react';
import { useLocation } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import { setMetaData } from '../utils/setMetaData';

export default function Search() {
  const { state } = useLocation();

  const meta = setMetaData({
    title: `"${state}" 검색 결과`,
    url: '/search',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>
          <h2>"{state}" 검색 결과</h2>
          <p>아직 아무것도 없어요</p>
        </div>
      </AppLayout>
    </>
  );
}
