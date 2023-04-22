import React from 'react';

export default function Avatar({ url, isNew }) {
  return (
    <div className='avatar'>
      <img className='photo' src={url} alt='avatar' />
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
