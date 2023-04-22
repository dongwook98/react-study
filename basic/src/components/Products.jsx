import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('data/products.json')
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      });

    return () => {
      console.log('🧹 이제 더이상 필요하지 않은 작업을 정리합니다.'); // unmount시 실행
    };
  }, []);

  return (
    <div>
      <ul>
        {products.map((item, i) => {
          return (
            <li key={i}>
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}
