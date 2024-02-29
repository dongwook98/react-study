import { useState } from 'react';
import { createContext } from 'react';

// Context: 전역 or 컴포넌트 간 공유할 상태 데이터를 보관
export const DarkModeContext = createContext();

// Provider: 밑에 있는 하위 컴포넌트들을 감싸는 부모 우산 컴포넌트, 그래서 children을 받아옴
export function DarkModeProvider({ children }) {
  // 전역 또는 부분적으로 상태 관리할 데이터와 상태 변경 로직들을 여기서 만들어주면 됨
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    // 리턴할때 Context에 있는 Provider를 쓰는데
    // 이것을 외부에서 편하기 쓰기 위해 Provider를 만들어주는 것
    <DarkModeContext.Provider
      // 전역 또는 부분적으로 상태 관리할 데이터와 상태 변경 로직들을
      // 하위에 있는 children, 자식 요소들이 이용하게 하려면 value에 전달
      // Context의 상태 데이터(darkMode)와 상태 변경 함수(toggleDarkMode)를 객체로 제공
      value={{ darkMode, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}
