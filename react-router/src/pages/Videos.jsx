import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`); // 코드상에서 동적으로 이동
  };
  return (
    <div>
      Videos
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='video id: '
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
