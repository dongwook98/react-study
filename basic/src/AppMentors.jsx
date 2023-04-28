import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // 멘토 수정
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    dispatch({ type: 'updated', prev, current });
  };

  // 멘토 추가
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 적어주세요.');
    const title = prompt('추가할 멘토의 직무를 적어주세요.');
    dispatch({ type: 'added', name, title });
  };

  // 멘토 삭제
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 적어주세요.');
    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: '동욱',
  title: '개발자',
  mentors: [
    {
      name: '제로초',
      title: '풀스택 개발자',
    },
    {
      name: '엘리',
      title: '프론트엔드 개발자',
    },
  ],
};
