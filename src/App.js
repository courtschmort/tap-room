import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Products from './components/Products.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
