import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });

    return () => {
      console.log('🧹 이제 더이상 필요하지 않은 작업을 정리합니다.'); // unmount시 실행
    };
  }, [checked]);

  return (
    <div>
      <input
        id='checkbox'
        type='checkbox'
        value={checked}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>Show only 🔥 Sale</label>
      <ul>
        {products.map((item) => {
          return (
            <li key={item.id}>
              <article>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </article>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}
