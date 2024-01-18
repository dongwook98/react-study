import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

export default function AppCounter() {
  // 컴포넌트들끼리 공통적으로 필요한 데이터는 제일 근접한 부모에 State를 둔다.
  const [totalCount, setTotalCount] = useState(0);

  const handleClick = () => {
    setTotalCount((prev) => prev + 1);
  };

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {totalCount} {totalCount > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        {/* 외부에 전달하는 props 콜백함수 및 외부로 노출하는 API는 우리가 노출하고 싶은 범위 내에서
          최대한 좁혀서 제공해 주는게 좋다. setTotalCount를 전달하지말고 handleClick으로 감싸서 전달
        */}
        <Counter total={totalCount} onClick={handleClick} />
        <Counter total={totalCount} onClick={handleClick} />
      </div>
    </div>
  );
}
