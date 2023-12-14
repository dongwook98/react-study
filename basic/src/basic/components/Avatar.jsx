import React from 'react';

export default function Avatar({ url, isNew }) {
  return (
    <div className='avatar'>
      <img className='photo' src={url} alt='avatar' />
      {/* isNew가 true인 경우에만 New 보이게 */}
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
