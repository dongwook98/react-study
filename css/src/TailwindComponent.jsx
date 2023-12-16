import React from 'react';

export default function TailwindComponent() {
  return (
    <div>
      {/* command + i 하면 자동완성 */}
      <h1 className='text-8xl'>안녕!</h1>
      <button className='bg-blue-500 rounded-xl px-4'>Button</button>
    </div>
  );
}
