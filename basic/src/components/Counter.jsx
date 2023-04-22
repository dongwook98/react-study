import React from 'react';
import { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [number, setNumber] = useState(0);
  // Counter 함수 다시 실행되어도 number는 0으로 초기화 x (useState는 다시 호출되어도 값을 계속 기억하고 있음)

  const HandleClick = () => {
    // setNumber() 실행 -> Counter함수 실행
    // 여러번 업데이트 하거나 이전 상태값을 토대로 업데이트하는 경우에는 기존에 스냅샷된 외부값에 의존하기 보다는 콜백함수형태로 setState하는것이 더 안전하다.
    setNumber((prevNumber) => prevNumber + 1);
    onClick(); // 외부 total값도 변경해줘야한다.
  };
  return (
    <div className='counter'>
      <p className='number'>
        {number}
        <span className='total'> /{total} </span>
      </p>
      <button className='button' onClick={HandleClick}>
        Add +
      </button>
    </div>
  );
}
