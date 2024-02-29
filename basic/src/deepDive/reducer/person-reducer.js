// dispatch할때 인자를 받아옴
// reducer: 기존 state와 액션을 받아와서 새로운 상태를 리턴
export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };
    }
    default: {
      throw new Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
