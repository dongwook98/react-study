import { useState, useEffect } from 'react';

export default function useProducts({ salesOnly }) {
  const [isLoding, setIsLoding] = useState(false);
  const [isError, setIsError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoding(true);
    setIsError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((error) => setIsError('에러가 발생했음!'))
      .finally(() => setIsLoding(false));

    return () => {
      console.log('🧹 이제 더이상 필요하지 않은 작업을 정리합니다.'); // unmount시 실행
    };
  }, [salesOnly]);

  return [isLoding, isError, products];
}
