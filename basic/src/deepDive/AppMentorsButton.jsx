import React, { memo } from 'react';
// import { useEffect } from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

const initialPerson = {
  name: '동욱',
  title: '개발자',
  mentors: [
    {
      name: '제로초',
      title: '풀스택 개발자',
    },
    {
      name: '엘리',
      title: '프론트엔드 개발자',
    },
  ],
};

// 1. 멘토를 추가하면 State가 변경되기 때문에 AppMentorsButton 컴포넌트가 다시 호출된다.
// 2. AppMentorsButton가 다시 호출되면 handleAdd, handleUpdate, handleDelete 변수에 새로운 함수 객체 참조값이 할당된다.
// 3. handleAdd를 props로 Button에 전달하는데 AppMentorsButton가 다시 호출될 때
// Button 컴포넌트를 가상으로 만들때 매번 새롭게 만들어진 함수 객체 참조값도 새로운 props로 전달된다.
// 4. 그리고 또한 text라는 값에 새로운 문자열을 할당할 것이다.
// 5. 그래서 Button 컴포넌트도 다시 호출된다.
// 즉, AppMentorsButton 컴포넌트에서 상태가 변경될 때마다 자식 컴포넌트들은 다 호출된다.
// 하지만 리액트는 Virtual DOM을 가지고 있기 때문에 실제로 브라우저 DOM 요소에는 바뀐 부분만 업데이트 해준다.!!
// 그리고 Button 컴포넌트는 수많은 자식 컴포넌트도 가지고 있지 않고, 무거운 작업을 하고 있지 않고 있기 때문에 지금은 성능 걱정을 할 필요가 없다.
// 만약, 컴포넌트가 수많은 자식 컴포넌트를 가지고 있고, 무거운 일을 하고, 다시 호출되는것 자체가 비효율적인 곳에서는 꼭 성능개선을 해줘야한다!! (by useMemo, useCallback, memo)
export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt('추가할 멘토의 이름을 적어주세요.');
    const title = prompt('추가할 멘토의 직무를 적어주세요.');
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt('삭제할 멘토의 이름을 적어주세요.');
    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
      <Button text='멘토 삭제하기' onClick={handleDelete} />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  // 리액트가 Virtual DOM을 쓴다고 해도 실제로 계산하는 코드가 많고 오래 걸리는 일들을 수행한다면
  // Virtual DOM을 만드는데 까지도 시간이 오래걸리기 때문에 어떤거를 업데이트 해야되는지 결정하는데까지
  // 오랜시간이 걸리기 때문에 우리 어플리케이션의 성능에 큰 영향을 줄 수 있음

  // 컴포넌트안에서 무언가 무거운 작업을 하는데 매번 하는게 아니라, 처음에만 계산해도 된다면 useEffect 사용 또는 useMemo 사용
  const result = useMemo(() => caculateSomething(), []); // 무거운 작업을 한번만 실행하고 그 결괏값을 저장해둠
  // useEffect(() => caculateSomething(), []); // 무거운 작업 한번만 실행

  // useEffect, useMemo, useCallback은 딱 한번만 수행되도록 만들수도 있고,
  // 어떤 특정한 값이 변경될 때 다시 실행, 계산이 되어야한다면 dependency 추가

  console.log('Button 컴포넌트 호출', text);
  // AppMentorsButton 컴포넌트가 변경이 될 때마다 Button 컴포넌트가 다시 호출이 되는걸 볼 수 있다.
  // 만약 Button 컴포넌트안에 복잡한 UI가 있기 때문에 Button 컴포넌트를 Virtual DOM을 만들어서 비교하는것 조차 시간낭비라고 생각한다면
  // 첫번째로, 우리가 Button 컴포넌트에 전달하고 있는 함수가 매번 새롭게 만들어지지 않게 useCallback을 사용!
  // 하지만 동일한 함수를 전달한다고 해도 props를 전달하게 되면 매번 컴포넌트를 호출할 때 마다 새로운 props라는 객체가 생성이 된다.
  // 그래서 아무리 똑같은 값을 전달한다고 해도 Button에 전달되는 props라는 객체가 매번 새로운 객체로 만들어진다.
  // 그래서 Button에게 props로 값이 전달될때 매번 새로운 객체가 만들어지더라도 객체안의 값이 동일한 값이라면 다시 리렌더링하지 않게 Button 자체를 memo를 해줘야 한다.
  // memo를 하면 리액트에게 props라는 객체가 변경이 되어도 실제 props로 전달된 값이 변경되지 않았다면 다시 렌더링하지말고 기억해달라고 명시하는 것이다.

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

// 무거운 작업! 🪨
function caculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('🔥');
  }
  return 10;
}
