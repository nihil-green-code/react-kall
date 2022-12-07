import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout';
import { setMetaData } from '../../utils/setMetaData';

export function Community() {
  const { state } = useLocation();

  const routesData = {
    notice: {
      title: '공지사항',
      url: '/community/notice',
    },
    guide: {
      title: '쇼핑몰 이용 가이드',
      url: '/community/guide',
    },
    visit: {
      title: '찾아오시는 길',
      url: '/community/visit',
    },
    question: {
      title: '자주 묻는 질문',
      url: '/community/question',
    },
    review: {
      title: '구매후기',
      url: '/community/review',
    },
    direct: {
      title: '1:1 문의',
      url: '/community/direct',
    },
  };

  const meta = setMetaData({
    ...routesData[state],
  });

  return (
    <>
      <AppLayout meta={meta}>
        <div>
          <ul>
            <li>
              <Link to='./notice' state='notice'>공지사항</Link>
            </li>
            <li>
              <Link to='./guide' state='guide'>쇼핑몰 이용 가이드</Link>
            </li>
            <li>
              <Link to='./visit' state='visit'>찾아오시는 길</Link>
            </li>
            <li>
              <Link to='./question' state='question'>자주 묻는 질문</Link>
            </li>
            <li>
              <Link to='./review' state='review'>구매후기</Link>
            </li>
            <li>
              <Link to='./direct' state='direct'>1:1 문의</Link>
            </li>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </AppLayout>
    </>
  );
}
