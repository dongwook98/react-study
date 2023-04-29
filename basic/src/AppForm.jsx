import React from 'react';
import { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // 리프레쉬x
  };

  const handleChange = (e) => {
    // console.log('name:', e.target.name);
    // console.log('value:', e.target.value);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

// 리액트의 철학
// 모든 UI의 업데이트는 상태의 변경으로 부터 발생해야 한다.
