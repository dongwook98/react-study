import React from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

const initialPerson = {
  name: '동욱',
  title: '주니어 프론트엔드 개발자',
  mentors: [
    {
      name: '제로초',
      title: '시니어 백엔드 개발자',
    },
    {
      name: '엘리',
      title: '시니어 프론트엔드 개발자',
    },
  ],
};

export default function AppMentorsReducer() {
  /**
   * useReducer를 사용하면 상태 변경 로직들을 컴포넌트에서 분리할 수 있다.
   * 그래서 컴포넌트 내부에 필요한 로직들만 간직할 수 있다.
   * 다른 컴포넌트에서도 동일한 로직이 필요하다면 그 로직을 재사용도 할 수 있다.
   *
   * 1. dispatch를 호출하면 useReducer에 등록해둔 personReducer 함수를 호출한다.
   * 2. 호출할때는 기존의 person이라는 상태와 dispatch에 전달한 action 객체를 personReducer의 두번째 인자로 전달한다.
   * 3. 전달해준 action.type에 따라서 상태 변경 로직들을 거치고 새로운 상태를 리턴한다.
   * 4. 그러면 useReducer가 자동으로 person State에 업데이트 한다.
   */
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // 멘토 이름 수정
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
        {person.name}은 {person.title}
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
