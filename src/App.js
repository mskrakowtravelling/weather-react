import React from 'react';
import './App.css';
import Weather from "./Weather"


function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Weather />
        <footer>
          <p>Designed and coded by Barbara Targosz, <a href="https://github.com/mskrakowtravelling/weather-react" title="GitHub account" target="_blank" rel="noreferrer">open-sourced on GitHub</a> </p>
        </footer>
      </div>

    </div>
  );
}

export default App;
