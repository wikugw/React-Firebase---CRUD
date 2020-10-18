import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="row mr-0">
        <div className="col-8 offset-md-2">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
