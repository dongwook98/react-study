import React from 'react';
import Avatar from './Avatar';

export default function Profile({ url, isNew, name, job }) {
  /**
   * props를 사용해서 재사용성 UP
   */
  return (
    <div className='profile'>
      <Avatar url={url} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
