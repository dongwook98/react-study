import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);

  const [isLoding, isError, products] = useProducts({ salesOnly: checked });

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (isLoding) return <p>Loding...!!</p>;

  if (isError) return <p>{isError}</p>;

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
