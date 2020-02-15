import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//       >
//       Learn React
//     </a>
//   </header>
// </div>
