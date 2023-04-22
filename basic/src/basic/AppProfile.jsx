import React, { Fragment } from 'react';
import Profile from './basic/components/Profile';
import Avatar from './basic/components/Avatar';

export default function AppProfile() {
  // 고차함수(함수 리턴)
  const handleClick = (name) => (event) => {
    console.log(name); // '강동욱'
    console.log(event); // SyntheticBaseEvent { ... }
    alert('클릭되었습니다!');
  };
  return (
    <Fragment>
      {/* 이벤트핸들러 자리에는 함수 참조값이 와야한다. 어떤 값을 전달하고 싶다면 함수를 리턴 */}
      <button onClick={handleClick('강동욱')}>클릭</button>
      <Profile
        url='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name='강동욱'
        job='프론트엔드 개발자'
        isNew={true}
      />
      <Profile
        url='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='손흥민'
        job='축구선수'
      />
      <Profile
        url='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='강동원'
        job='배우'
      />
      <Avatar
        url='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        isNew={true}
      />
    </Fragment>
  );
}
