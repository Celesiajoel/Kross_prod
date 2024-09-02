import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KrossHome from './home';

function App() {

  
  
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<KrossHome />} />
      </Routes>
    </Router>
    
  );
}

export default App;