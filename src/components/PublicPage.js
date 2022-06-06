/* eslint-disable */
import React from 'react';
import '../styles/css/layout.css';
import logo from '../alienLogo.png';
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
          padding: '3em',
        }}
      >
        <img
          style={{ padding: '3em' }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>Aliens form</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The first interactive form to communicate with aliens
        </a>
      </div>
      <div>
        communicating with aliens is a very important subject that we should
        cherishmore nowadays. as our world is changing and we are communicating
        with other worlds, we have to understand how they live and how they
        think about how we live.
      </div>
    </div>
  );
};

export default PublicPage;
