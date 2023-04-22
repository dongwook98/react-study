import React from 'react';
import Avatar from './Avatar';

export default function Profile({ url, isNew, name, job }) {
  return (
    <div className='profile'>
      <Avatar url={url} isNew={isNew} />
      <h1>{name}</h1>
      <p>{job}</p>
    </div>
  );
}
