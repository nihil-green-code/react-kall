import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <Link to='/agree'>이용약관</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
