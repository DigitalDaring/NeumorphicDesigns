import React, {useRef, useState} from 'react';
import './App.scss';
import OutputMonitor from './components/output-monitor/output-monitor';

declare global {
  namespace JSX {
    interface IntrinsicElements {
        "radium-component": any
    }
  }
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <OutputMonitor></OutputMonitor>
      </header>
    </div>
  );
}

export default App;
