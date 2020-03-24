import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/HooksCounter';
import CounterTwo from './components/HooksCounterTwo';
import CounterThree from './components/HooksCounterTree';
import CounterFour from './components/HooksCounterFour';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterTwo></CounterTwo>
      <CounterThree></CounterThree>
      <CounterFour></CounterFour>
    </div>
  );
}

export default App;
