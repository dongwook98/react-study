import React from 'react';
import { useState } from 'react';

export default function Counter({ total, onClick }) {
  /**
   * 리액트에서는 UI와 밀접하게 관련된 데이터는 State에 보관
   * 로컬 변수를 만들고 로컬 변수를 보여준다고해도 리액트는 이게 로컬 변수가 변경된지 모른다.
   * 그래서 리액트에게 “이게 변경이 가능한 데이터고 이 데이터가 변경이 될때마다 UI를 업데이트 해줘”라고 알려주고 싶다면 State에 보관해야한다.
   */
  const [count, setCount] = useState(0);
  // Counter 함수 다시 실행되어도 count는 0으로 초기화X (useState는 다시 호출되어도 값을 계속 기억하고 있음)
  /**
   * 리액트에서 제공하는 setCount를 이용했기 때문에 count값이 변경이 될때마다 리액트가 자동적으로 Counter라는 함수 컴포넌트를 다시 호출한다.
   * Counter에 props가 있으면 그 props가 변경되거나 내부에서 가지고 있는 useState의 State가 변경되면
   * 리액트는 State가 변경될때 마다 변경된 해당 컴포넌트 함수 전체를 다시 실행한다.
   * 그래서 리턴되는 값 DOM요소들이 생기는데
   * 다만, 리액트에서는 Virtual DOM을 사용하기 때문에 이전의 DOM요소와 지금의 DOM요소에서 변경되는 부분,
   * 즉, <p></p> 만 변경이 되서 <p></p>만 업데이트해준다.
   */
  const handleClick = () => {
    /**
     * 여러번 업데이트 하거나 이전 상태값을 토대로 업데이트하는 경우에는
     * 기존에 스냅샷된 외부값에 의존하기 보다는 콜백함수형태로 setState하는것이 더 안전하다.
     */
    setCount((prevCount) => prevCount + 1);
    onClick(); // 외부 totalCount값도 변경
  };

  return (
    <div className='counter'>
      <p className='number'>
        {count}
        <span className='total'> /{total} </span>
      </p>
      <button className='button' onClick={handleClick}>
        Add +
      </button>
    </div>
  );
}
