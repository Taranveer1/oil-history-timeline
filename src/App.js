import React from 'react';
import Timeline from './components/Timeline';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Oil Industry Timeline</h1>
        <p>From the Pennsylvania Oil Boom to the Renewable Energy Transition</p>
      </header>
      <main>
        <Timeline />
      </main>
    </div>
  );
}

export default App;
