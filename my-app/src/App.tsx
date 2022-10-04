import React from 'react';
import Main from './pages/main/index';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/404/index';
import AboutUs from './pages/about/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// import userEvent from '@testing-library/user-event';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="wrapper header__wrapper">
            <div className="header__logo-line">
              <a href="index.html" className="logo">
                <div className="logo__image"></div>
              </a>
            </div>
            <div className="header__links">
              <a className="header__link" href="/">
                Главная
              </a>
              <a className="header__link" href="/nofound">
                404
              </a>
              <a className="header__link" href="/about">
                О нас
              </a>
            </div>
            <a href="#" className="navigation__link logo_telegram">
              <div className="logo__contact logo_telegram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.65 0.131505L0.933877 8.27737C-0.275179 8.8564 -0.268184 9.66063 0.71205 10.0192L5.26049 11.7111L15.7843 3.79398C16.2819 3.43298 16.7365 3.62718 16.3628 4.02274L7.83648 13.198H7.83448L7.83648 13.1992L7.52273 18.7894C7.98237 18.7894 8.18521 18.538 8.44301 18.2414L10.6523 15.6798L15.2477 19.7271C16.095 20.2835 16.7036 19.9975 16.9144 18.7918L19.931 1.84003C20.2398 0.363835 19.4584 -0.304562 18.65 0.131505Z" />
                </svg>
              </div>
            </a>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <footer className="footer">
          <div className="wrapper footer__wrapper">
            <div className="footer-navigation">
              <div className="footer-navigation__column">
                <a href="https://rs.school/" className="logo-footer">
                  <div className="logo-object"></div>
                </a>
              </div>
              <div className="footer-navigation__column">
                <h4 className="footer-navigation__title">©2022 Изделия из дерева</h4>
              </div>
              <div className="footer-navigation__column">
                <div className="footer__link">
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: '#F4D011', marginRight: '10px', fontSize: '36px' }}
                  />
                  <div className="footer-navigation__column">
                    <a className="person-link" href="https://github.com/Tanik-sam">
                      Tanik-sam
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
