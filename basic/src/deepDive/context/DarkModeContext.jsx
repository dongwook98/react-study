import { useState } from 'react';
import { createContext } from 'react';
/**
 * 리액트에서 제공하는 createContext로 만드는 Context에 우리가 필요한 상태, 데이터를 보관
 * Provider는 밑에 있는 하위 컴포넌트들을 부모 우산 컴포넌트이다. 그래서 children을 받아옴
 */
export const DarkModeContext = createContext(); // Context에 대한 데이터를(darkMode, toggleDarkMode) 객체로 제공

export function DarkModeProvider({ children }) {
  // 우리가 글로벌하게 상태 관리할 데이터와 그걸 처리하고 싶은 함수들을 여기서 만들어주면 됨
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    // 리턴할때 Context에 있는 Provider를 쓰는데 이걸 외부에서 편하기 쓰기 위해 DarkModeProvider, 우산을 만들어주는 것
    <DarkModeContext.Provider
      // 글로벌하게 상태 관리할 데이터와 그걸 처리하고 싶은 함수들을 하위에 있는 children, 자식 요소들이 이용하게 하려면 value에다가 지정해주면 된다.
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
