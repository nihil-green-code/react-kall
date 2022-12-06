import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <header>
        <h1>
          <Link to='/'>Header</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to='/custom'>주문제작</Link>
            </li>
            <li>
              <Link to='/design'>디자인</Link>
            </li>
            <li>
              <Link to='/ETC'>ETC</Link>
            </li>
            <li>
              <Link to='/community'>커뮤니티</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
