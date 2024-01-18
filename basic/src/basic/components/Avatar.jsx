import React from 'react';

export default function Avatar({ imageUrl, isNew }) {
  return (
    <div className='avatar'>
      <img className='photo' src={imageUrl} alt='avatar' />
      {/* isNew가 true인 경우에만 New 보이게 */}
      {isNew && <span className='new'>New</span>}
    </div>
  );
}
