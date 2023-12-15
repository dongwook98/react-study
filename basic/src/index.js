import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppJSX from './basic/AppJSX'; // JSX 학습
// import AppProfile from './basic/AppProfile'; // props 학습
// import AppCounter from './basic/AppCounter'; // useState 학습
// import AppProducts from './basic/AppProducts'; // useEffect 학습
// import AppXY from './deepDive/AppXY'; // 객체 상태 관리
// import AppMentor from './deepDive/AppMentor'; // 중첩 객체 상태 관리 학습
// import AppMentors from './deepDive/AppMentors'; // 리액트 불변성, useReducer 학습
// import AppMentorsImmer from './deepDive/AppMentorsImmer'; // Immer 학습
// import AppForm from './deepDive/AppForm'; // 언컨트롤, 컨트롤 컴포넌트 학습
// import AppWrap from './deepDive/AppWrap'; // HCO 컴포넌트, children 학습
// import AppCard from './deepDive/AppCard'; // HCO 컴포넌트, children 학습
// import AppTheme from './deepDive/AppTheme'; // ContextAPI 학습
import AppMentorsButton from './deepDive/AppMentorsButton'; // useMemo, useCallback, memo (성능 개선)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AppMentorsButton />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
