/* eslint-disable */
import './App.css';
import PublicPage from './components/PublicPage';
// import logo from './logo.svg';
// import TopMenu from './components/TopMenu'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App" style={{}}>
      <NavBar />
      <PublicPage />
      {/* {
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanks for visiting the website
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          please login with this link that takes you to react page 
        </a>
      </header> } */}
    </div>
  );
}

export default App;
