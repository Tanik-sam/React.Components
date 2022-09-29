import React from 'react';
import logo from './logo.svg';
import Main from './pages/main/index';
import './App.css';
// import userEvent from '@testing-library/user-event';

function App() {
  const user = {
    avatarUrl:
      'https://thumb.tildacdn.com/tild3662-3863-4533-b732-363737643034/-/resize/560x380/-/format/webp/photo6.jpg',
  };
  const element = <img src={user.avatarUrl} />;
  return (
    <div className="App">
      <Main name="tt" />
      {element}
    </div>
  );
}

export default App;
