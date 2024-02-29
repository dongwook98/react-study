import React from 'react';
import { useState } from 'react';

export default function AppMentor() {
  // 중첩 객체 상태 관리
  const [person, setPerson] = useState({
    name: '동욱',
    title: '주니어 프론트엔드 개발자',
    mentor: {
      name: '엘리',
      title: '시니어 프론트엔드 개발자',
    },
  });

  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const promptName = prompt('바꾸실 멘토의 이름을 입력해주세요.');
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: promptName },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const promptTitle = prompt(`바꾸실 멘토의 타이틀을 입력해주세요.`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title: promptTitle },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
