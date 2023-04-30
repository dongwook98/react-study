import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext(); // Context에 대한 데이터를(darkMode, toggleDarkMode) 객체로 제공

export function DarkModeProvider({ children }) {
  // 자식 컴포넌트들을 위한 우산을 만드는 것!
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log('toggleDarkMode 실행');
    setDarkMode((mode) => !mode);
  };
  return (
    <DarkModeContext.Provider
      value={{ darkMode: darkMode, toggleDarkMode: toggleDarkMode }} // darkMode:darkMode => darkMode 생략가능!
    >
      {children}
    </DarkModeContext.Provider>
  );
}
