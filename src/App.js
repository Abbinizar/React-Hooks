import React from 'react';
import './App.css';
import Counter from './components/HooksCounter';
import CounterTwo from './components/HooksCounterTwo';
import CounterThree from './components/HooksCounterTree';
import CounterFour from './components/HooksCounterFour';
import CounterOne from './components/HooksCounterOne';
import Mouse from './components/HooksMouse';
import MouseContainer from './components/MouseContainer';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <CounterTwo></CounterTwo>
      <CounterThree></CounterThree>
      <CounterFour></CounterFour>
      <CounterOne></CounterOne>
      <Mouse></Mouse>
      <MouseContainer></MouseContainer>
    </div>
  );
}

export default App;
