import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      {/* Link태그는 a태그와 비슷한데 차이점은 페이지에서 라우팅을 가능하게해줌 */}
      <Link to='/'>Home</Link>
      <Link to='/videos'>Videos</Link>
    </nav>
  );
}
