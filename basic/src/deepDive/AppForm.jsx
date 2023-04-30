import React from 'react';
import { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // 리프레쉬x
    console.log(form);
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

// form에 있는 input 데이터는 사용자가 바로 수정하고 눈으로 바로 확인 가능하기 때문에 언 컨트롤 컴포넌트라고 한다.
// => 리액트에서 추구하는 원칙과 어긋난다. 리액트는 항상 UI의 업데이트는 리액트의 상태로 부터 발생되어야 한다.
// => 그래서 form을 사용할때는 useState를 이용해서 value는 그 상태의 값을 출력하고 onChange가 발생할 때 마다 그 상태를 업데이트 해줘야된다.
