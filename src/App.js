import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import './App.css';

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Wedding from './pages/Wedding'
import Potrait from './pages/Potrait'



function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/wedding" component={Wedding} />
        <Route path="/potrait" component={Potrait} />
      </Router>
    </>
  );
}

export default App;
