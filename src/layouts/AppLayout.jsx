import React from 'react';
import { Footer, Header, Main } from '../components/Layout';
import { Meta } from '../components/Layout/Meta';

export default function AppLayout({children, meta}) {
  return (
    <>
      <Meta meta={meta} />
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}
