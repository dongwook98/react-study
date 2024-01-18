import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
  return (
    <div>
      {/* Navbar는 고정으로 보여주고 Outlet이라는 창구에
          해당하는 url에 맞는 페이지를 보여줌
      */}
      <Navbar />
      <Outlet />
    </div>
  );
}
