import './App.css';

function AppJSX() {
  const name = '동욱';
  const list = ['우유', '딸기', '바나나', '초코'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((el, i) => {
          return <li key={i}>{el}</li>;
        })}
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
