import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Navbar from './Pages/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product" component={Product} />
      <Route exact path="/about" component={About} />
      <Redirect to="/" />
        
      </Switch>

    </>
  );
}

export default App;
