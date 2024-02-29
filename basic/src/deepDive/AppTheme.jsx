import React from 'react';
import { useContext } from 'react';
import './AppTheme.css';
import { DarkModeProvider, DarkModeContext } from './context/DarkModeContext';

export default function AppTheme() {
  return (
    // 다크모드는 어플리케이션 전반적으로 이용하기 때문에 전체적으로 감싸줌
    <DarkModeProvider>
      <Header />
      <Main />
      <Footer />
    </DarkModeProvider>
  );
}

function Header() {
  return <header className='header'>Header</header>;
}

function Main() {
  return (
    <main className='main'>
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  return <div>User</div>;
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  // 만든 Context 사용
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div>
      Product Detail
      <p>
        DarkMode:
        {darkMode ? (
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Dark Mode
          </span>
        ) : (
          <span>Light Mode</span>
        )}
      </p>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        Toggle
      </button>
    </div>
  );
}

function Footer() {
  return <footer className='footer'>Footer</footer>;
}
