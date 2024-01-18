import './App.css';

function AppJSX() {
  const name = '동욱';
  const list = [
    '우유',
    '딸기',
    '바나나',
    '초코',
    '키위',
    '당근',
    '수박',
    '포도',
  ];
  /**
   * JSX 문법 정리
   * 1. 컴포넌트는 꼭 하나의 태그만 반환해야한다. 다수의 태그를 반환하고 싶다면 부모 태그를 감싸야한다.
   * 2. class대신에 className 사용
   * 3. JSX는 자바스크립트에서 작성하는 문법이기 때문에 자바스크립트 코드를 중간중간에 작성할 수 있다.
   * 다만, 자바스크립트 코드를 작성할때는 중괄호{}로 묶어줘야한다.
   */
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: 100 + 100 + 'px' }}
        src='https://plus.unsplash.com/premium_photo-1670270204757-08153c6fd333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt='칵테일'
      />
    </>
  );
}

export default AppJSX;
