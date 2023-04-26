import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleonPointerMove = (e) => {
    console.log(e.clientX, e.clientY);
    // setPosition({ x: e.clientX, y: e.clientY });
    // 만약 수평으로만 이동이 가능하다면?
    setPosition((prev) => ({ ...prev, x: e.clientX }));
    // setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  return (
    <div className='container' onPointerMove={handleonPointerMove}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
