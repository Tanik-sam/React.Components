import { Link } from 'react-router-dom';
import React from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="no-found">
        <div className="no-found__image"></div>
        <div className="no-found__block">
          <p className="no-found__text">- Что там?</p>
          <p className="no-found__text">- По крайней мере там нет страницы, которую ты ищешь.</p>
          <p className="no-found__text">
            Поворачивай
            <Link to="/" style={{ color: '#F4D011', textDecoration: 'none', paddingLeft: '10px' }}>
              на главную!
            </Link>
          </p>
        </div>
        <div className="no-found__404">404</div>
      </div>
    );
  }
}

export default NotFoundPage;
