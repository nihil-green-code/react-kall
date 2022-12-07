import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [value, setValue] = useState('');
  const navi = useNavigate();

  function onChangeValue(e) {
    setValue(e.target.value);
  }

  function onClickSearch(e) {
    e.preventDefault();

    navi('/search', { state: value });
  }

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
              <Link to='/community/notice' state='notice'>커뮤니티</Link>
            </li>
          </ul>
        </nav>
        <div>
          <form>
            <input type="text" value={value} onChange={onChangeValue} />
            <button type='submit' onClick={onClickSearch}>검색</button>
          </form>
        </div>
      </header>
    </>
  );
}
