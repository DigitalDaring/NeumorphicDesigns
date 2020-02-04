import React, {useRef, useState} from 'react';
import logo from './logo.svg';
import RadiumComponent from './components/radium';
import './App.scss';
import NeumorphCard from './components/neumorph-card/neumorph-card';

declare global {
  namespace JSX {
    interface IntrinsicElements {
        "radium-component": any
    }
  }
}

const random = Math.floor(Math.random() * 101);

const App = () => {
  
  return (
    <div className="App">
      <header className="App-header">
        <NeumorphCard>
          <h2>Current Output</h2>
          <RadiumComponent percent={random}></RadiumComponent>
        </NeumorphCard>
      
      </header>
    </div>
  );
}

export default App;
