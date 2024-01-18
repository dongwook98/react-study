import React from 'react';
import Avatar from './Avatar';

export default function Profile({ imageUrl, isNew, name, job }) {
  /**
   * 즉, Props를 이용하면 동일한 컴포넌트를 확장성 있게 재사용 할 수 있다.
   * 다르게 말하면 외부에서 데이터를 전달 할 수 있는 Props를 이용해서
   * 재사용 가능한 컴포넌트를 만든것이다.
   */
  return (
    <div className='profile'>
      <Avatar imageUrl={imageUrl} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
