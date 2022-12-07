import React from 'react';
import AppLayout from '../layouts/AppLayout';
import { TestDiv, TestDivExtend } from '../styles/testStyled';
import { setMetaData } from '../utils/setMetaData';

export default function Test() {
  const meta = setMetaData({
    title: '테스트',
    url: '/test',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <TestDiv>스타일 적용된 div</TestDiv>
        <TestDivExtend>스타일드 컴포넌트를 확장해서 일부 재정의 가능.</TestDivExtend>
      </AppLayout>
    </>
  );
}
