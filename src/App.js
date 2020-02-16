import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/products' component={Products}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
