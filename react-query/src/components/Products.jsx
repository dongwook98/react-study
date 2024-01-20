import React, { useState } from 'react';
// import useProducts from '../hooks/use-products';
import { useQuery } from '@tanstack/react-query';

/**
 * 우리가 작성한 커스텀 훅의 문제점
 * 커스텀 훅은 값을 재사용하는게 아니라 커스텀 훅을 호출하는 컴포넌트 마다 내부 상태들이 각각 다르게 설정되고
 * 커스텀 훅을 사용하는 곳마다 네트워크 통신이 발생하게 된다.
 * cache가 되지 않는다 - 네트워크에서 받아온 데이터를 별도로 저장해두는것이 아니라 커스텀 훅을 호출 할 때 마다
 * 새롭게 네트워크 요청을 해서 서버에서 데이터를 받아올것이다.
 * retry 기능이 없다 - 네트워크 통신이 실패했을때 다시 재시도 할 수있는 기능이 결여
 *
 * 위 문제를 해결해주는게 리액트 쿼리!
 * key 아래에다가 네트워크에서 받아온 데이터를 메모리에 보관해놓음
 * 기본적으로 key로 중복된 네트워크 통신을 구분해서 막아줌
 */
export default function Products() {
  const [checked, setChecked] = useState(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(
    ['products', checked],
    async () => {
      console.log('fetching....!', checked);
      return fetch(`data/${checked ? 'sale_' : ''}products.json`).then((res) =>
        res.json()
      );
    },
    {
      // 얼마나 자주 업데이트 되는 데이터냐에 따라서 이런 민감도를 잘 파악해서 staleTime을 적절히 지정해줘야 한다.
      staleTime: 1000 * 60 * 5,
    }
  );

  // const [loading, error, products] = useProducts({ salesOnly: checked });
  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <>
      <label>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        Show Only 🔥 Sale
      </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
