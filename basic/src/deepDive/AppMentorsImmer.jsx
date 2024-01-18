import React from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  /**
   * Immer의 동작원리는 우리가 객체를 수정하면 Immer 내부적으로 새로운 객체를 만들어서
   * 우리가 수정한 부분만 수정해서 새로운 객체를 리턴해준다.
   * 그래서 우리는 불변성을 신경쓰지않고도 코딩 할 수 있다.
   */
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 적어주세요.');
    const title = prompt('추가할 멘토의 직무를 적어주세요.');
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 적어주세요.');
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
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
