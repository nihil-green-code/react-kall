import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout';
import { setMetaData } from '../../utils/setMetaData';

export default function Community() {
  const meta = setMetaData({
    title: '커뮤니티',
    url: '/community',
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>커뮤니티</div>
        <ul>
          <li>
            <Link to='./notice'>공지사항</Link>
          </li>
          <li>
            <Link to='./guide'>쇼핑몰 이용 가이드</Link>
          </li>
          <li>
            <Link to='./visit'>찾아오시는 길</Link>
          </li>
          <li>
            <Link to='./question'>자주 묻는 질문</Link>
          </li>
          <li>
            <Link to='./review'>구매후기</Link>
          </li>
          <li>
            <Link to='./direct'>1:1 문의</Link>
          </li>
        </ul>

        <Outlet />
      </AppLayout>
    </>
  );
}
