import React from 'react';
import '../../src/basic/App.css';
import { useState } from 'react';
import useProducts from './hooks/use-products';

export default function AppProductsCustomHook() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>
    </div>
  );
}

function Products() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  // TODO basic/components/Products 코드와 비교해보면서 공부
  // products State, loading State, error State와 네트워크 통신 로직을
  // useProducts 커스텀 훅으로 관리
  const [loading, error, products] = useProducts({ salesOnly: checked });

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
      <label htmlFor='checkbox'>세일중인 상품들만 보기🔥</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <article>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}
