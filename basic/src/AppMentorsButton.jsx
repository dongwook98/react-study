import React from 'react';
import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
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
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
      <Button text='멘토 삭제하기' onClick={handleDelete} />
    </div>
  );
}

function Button({ text, onClick }) {
  console.log('Button', text, 're-rendering 😁');
  // Button 멘토 이름 바꾸기 re-rendering 😁
  // Button 멘토 추가하기 re-rendering 😁
  // Button 멘토 삭제하기 re-rendering 😁
  // 1. 멘토를 추가하면 Appmentors 함수형 컴포넌트가 다시 호출된다.
  // 2. Appmentors가 다시 호출되면 handleAdd,handleUpdate,handleDelete 변수에 새로운 함수 객체 참조값이 할당된다.
  // 3. handleAdd가 호출되는곳을 가보면 리렌더링 될 때 마다 Button이라는 컴포넌트를 만들때 매번 새롭게 만들어진 함수 객체도 새로운 prop으로 전달된다.
  // 4. 그래서 Button 컴포넌트도 다시 호출된다.

  // 하지만 Button 컴포넌트는 수많은 자식 컴포넌트도 가지고 있지 않고, 무거운 작업을 하고 있지 않고 있기 때문에 그렇게 큰 상관은 없다!
  // 만약 컴포넌트가 수많은 자식 컴포넌트를 가지고 있고, 무거운 일을 하고, 다시 호출되는것 자체가 비효율적인 곳에서는 꼭 성능개선을 해줘야한다!!
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}
    </button>
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
