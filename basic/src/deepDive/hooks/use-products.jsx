import { useState, useEffect } from 'react';

/**
 * Hooks은(함수들은) 값의 재사용이 아니라 로직의 재사용을 위한것이다.
 * useProducts이라는 함수, 커스텀 훅을 A와 B 컴포넌트에서 사용한다면
 * 각각의 A와 B 컴포넌트에서 사용되는 데이터는 공유되지않고 개별적으로 존재하게 된다.
 * 즉, 커스텀 훅을 사용하는곳마다 개별적인 데이터가 만들어지게 된다.
 *
 * useState도 사용하는곳마다 개별적인 데이터가 만들어지게 되서 비슷하다.
 * useState의 로직을 사용하는것뿐이지 데이터를 공유하고 있지는 않다.
 * 이것처럼 커스텀훅도 로직이 공유되는거지 데이터 자체가 공유되는건 아니다.
 */
export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
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

    return () => {
      console.log('🧹 이제 더이상 필요하지 않은 작업을 정리합니다.');
    };
  }, [salesOnly]);

  // 커스텀 훅은 우리가 필요한 데이터를 반환
  return [loading, error, products];
}
