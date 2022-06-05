 /* eslint-disable */
import React from 'react';
import '../styles/css/layout.css';
import logo from '../alien.png';
import LoginButton from './LoginButton';

const PublicPage = () => {
  return (
    <div
      style={{
        backgroundColor: '#282c34',
        width: '100%',
        height: '100%',
        color: 'white',
      }}
    >
      <div>
        <div style={{ paddingTop: '2em' }}></div>
        <p>
          <b>Main landing page</b>{' '}
        </p>

        {/* <button>Login</button> */}
      </div>
      <LoginButton />
      <div
        style={{
          fontSize: 'calc(10px + 2vmin)',
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>Thanks for visiting the website</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          please login with this link that takes you to react page
        </a>
      </div>
      <div>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default PublicPage;
