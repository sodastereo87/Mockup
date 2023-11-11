import React from 'react';
import './App.css';
import DropDown from './components/dropdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontWeight: 'bold',textDecoration: 'underline' }}>
         Document Upload
        </p>
      </header>
      <div>
        <DropDown />
      </div>
    </div>
  );
}

export default App;
