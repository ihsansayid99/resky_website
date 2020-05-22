import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';

import Home from './pages/Home'
import Navbar from './components/Navbar'



function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route to="/" exact component={Home} />
      </Router>
    </>
  );
}

export default App;
