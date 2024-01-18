import React from 'react';
import Profile from './components/Profile';
/**
 * AppProfile 컴포넌트에서 App.css를 import 해주어서
 * Profile 컴포넌트에서는 App.css를 import 해주지 않아도 됨
 */
import './App.css';
import Avatar from './components/Avatar';

export default function AppProfile() {
  // 고차함수(함수 리턴)
  const handleClick = (name) => (event) => {
    console.log(name); // '강동욱'
    console.log(event); // SyntheticBaseEvent { ... }
    // 리액트에서 브라우저에서 발생한 이벤트를 리액트에서 처리할 수 있는 이벤트
    // 형태로 한단계 감싸서 객체로 만들어서 이벤트 리스너에 전달해줌
    alert(`버튼이 클릭됨! ${name}`);
  };

  return (
    <>
      {/* 이벤트핸들러 자리에는 함수 참조값이 와야한다. 어떤 값을 전달하고 싶다면 함수를 리턴 */}
      <button onClick={handleClick('강동욱')}>클릭</button>
      {/* 아바타 컴포넌트만 따로 필요해서 분리 */}
      <Avatar
        imageUrl='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        isNew
      />
      {/* 컴포넌트로 만들어두면 외부 상태와 연결되어 있지 않고 고립되고 독립적이고 재사용성이 뛰어나다. */}
      {/* 컴포넌트에 속성으로 원하는 key와 value를 전달하는 컴포넌트에 props라는 객체로 전달된다. */}
      {/* 이렇게 props를 사용하면 동일한 컴포넌트를 재사용 할 수 있다. */}
      <Profile
        imageUrl='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name='강동욱'
        job='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        imageUrl='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='손흥민'
        job='축구선수'
      />
      <Profile
        imageUrl='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='강동원'
        job='배우'
      />
    </>
  );
}
