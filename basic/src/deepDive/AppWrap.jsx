import React from 'react';

/**
 * 컴포넌트 재사용1 🍯
 *
 * Wrap(High Order) 컴포넌트를 사용하면 Navbar 컴포넌트의 재사용성이 좋아진다.
 * 배경이 노란색인거는 그대로 쓰고 싶은데 안에 컨텐츠만 바꿔가면서 쓰고 싶을때 사용하면 좋다.
 */
export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          name='Bob'
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>

      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
          name='Bob'
          size={200}
        />
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ background: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
