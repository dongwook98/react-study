import React from 'react';
import { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // 좌표라는 공통점을 지닌 x와 y를 따로 상태 관리하는것보단 연관있는 데이터는 객체로 묶어서 상태 관리
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const handleonPointerMove = (e) => {
    console.log(e.clientX, e.clientY);
    // setPosition({ x: e.clientX, y: e.clientY });
    // 만약 수평으로만 이동이 가능하다면?
    // 스프레드 연산자를 사용해 이전상태값을 그대로 가져오고 x만 우리가 원하는 값으로 덮어씌움
    // setPosition((prev) => ({ ...prev, x: e.clientX }));
    setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
  };

  return (
    <div className='container' onPointerMove={handleonPointerMove}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
