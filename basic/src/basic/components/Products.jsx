import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import useProducts from '../../deepDive/hooks/use-products';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  /**
   * useEffect의 사용방법
   * 1) 컴포넌트가 보여질때 처음으로 네트워크 통신을 해야되거나 무거운 일을 해야할 때
   * 2) 특정한 무언가가 변경될때마다 네트워크 통신을 해야되거나 무거운 일을 해야할 때
   */
  // 디펜던시 배열 [] : Products 컴포넌트가 마운트 될 때 딱 한번만 실행, 만약 useEffect를 감싸지 않는다면 무한루프..
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('백엔드에서 데이터를 받아옴');
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
        setError('에러 발생');
      })
      .finally(() => {
        setLoading(false);
      });

    // 컴포넌트가 없어졌을때 무언가 정리해야한다면 return에 콜백함수 전달
    // 이 콜백함수는 컴포넌트가 언마운트될 때 호출됨
    return () => {
      console.log('깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]); // checked가 변경될때마다 useEffect가 다시 실행

  // 위 useEffect 코드와 products State, loading State, error State를 useProducts라는 커스텀 훅으로 묶어줌
  // const [loading, error, products] = useProducts({ salesOnly: checked });

  if (loading) return <p>로딩 중...!!</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <input
        id='checkbox'
        type='checkbox'
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show Only Hot Sale🔥</label>
      <ul>
        {products.map((product) => {
          return (
            // map을 이용해서 자식요소를 만드는 경우에는 꼭 고유한 key값을 설정
            // 리액트 내부적으로 key값의 변경 유무에 따라 업데이트 할지 안할지 결정함
            <li key={product.id}>
              <article>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
