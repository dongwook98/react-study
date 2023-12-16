import './App.css';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import StyledComponent from './StyledComponent';
import TailwindComponent from './TailwindComponent';

/**
 * - 클래스명의 중복을 걱정하지 않고 스타일링 가능한 POST CSS
 * - css파일을 만들지않고도 js파일안에서 우리만의 스타일링이 가능한 라이브러리 Styled-Components
 * - JSX에서 클래스에 바로 스타일링이 가능한 TailwindCSS
 */

function App() {
  return (
    <>
      <Button1 />
      <Button2 />
      <StyledComponent />
      <TailwindComponent />
    </>
  );
}

export default App;
