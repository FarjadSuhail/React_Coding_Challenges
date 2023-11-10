import React from 'react';
import PassingProps from './Components/PassingProps';
// import './App.css';

function App() {
  const name = 'John';
  const age = 45;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PassingProps name={name} age={age} />
    </div>
  );
}

export default App;
