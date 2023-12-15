import React from 'react';
// import { useReducer } from 'react';
import { useState } from 'react';
// import personReducer from './reducer/person-reducer';

export default function AppMentors() {
  /**
   * 리액트 불변성
   *
   * 리액트에서 사용하는 모든 State는 불변성을 유지해야한다.
   * 리액트에서 사용하는 상태에 객체나 배열의 내부 내용을 직접적으로 변경하면 안되고,
   * 변경이 발생한다면 배열과 객체의 전체적인 껍데기를 새로 만들어서 업데이트 해줘야 한다.
   */
  const [person, setPerson] = useState(initialPerson);
  /**
   * useReducer
   *
   * useReducer를 사용하면 컴포넌트 내부에 필요한 로직들만 간직할 수 있고,
   * 다른 컴포넌트에서도 동일한 로직이 필요하다면 그 로직을 재사용도 할 수 있다.
   */
  // const [person, dispatch] = useReducer(personReducer, initialPerson);

  // 멘토 이름 수정
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    setPerson((person) => ({
      ...person,
      // map을 사용해서 새로운 mentors를 반환
      mentors: person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          return { ...mentor, name: current };
        }
        return mentor;
      }),
    }));
    // dispatch({ type: 'updated', prev, current });
  };

  // 멘토 추가
  const handleAdd = () => {
    const name = prompt('추가할 멘토의 이름을 적어주세요.');
    const title = prompt('추가할 멘토의 직무를 적어주세요.');
    // dispatch({ type: 'added', name, title });
    setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors],
    }));
  };

  // 멘토 삭제
  const handleDelete = () => {
    const name = prompt('삭제할 멘토의 이름을 적어주세요.');
    // dispatch({ type: 'deleted', name });
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
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
