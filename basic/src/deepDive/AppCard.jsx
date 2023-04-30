import React from 'react';

export default function AppCard() {
  return (
    <>
      <Card>
        <p>카드 1</p>
      </Card>

      <Card>
        <h1>카드 2</h1>
        <p>두번째 카드입니다.</p>
      </Card>

      <Card>
        <article>
          <img
            src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
            alt='인물'
            style={{
              width: '200px',
              borderRadius: '50%',
            }}
          />
          <p>프론트 엔드 개발자</p>
          <p>성실하게 임하겠습니다!</p>
        </article>
      </Card>
    </>
  );
}

// Card라는 컨테이너용 컴포넌트
function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        minHeight: '200px',
        maxWidth: '200px',
        margin: '1rem',
        padding: '1rem',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  );
}
