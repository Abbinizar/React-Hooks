import React from 'react';
import './App.css';
import Counter from './components/HooksCounter';
import CounterTwo from './components/HooksCounterTwo';
import CounterThree from './components/HooksCounterTree';
import CounterFour from './components/HooksCounterFour';
import CounterOne from './components/HooksCounterOne';
import Mouse from './components/HooksMouse';
import MouseContainer from './components/MouseContainer';
import IntervalCounter from './components/IntervalHooksCounter';
import DataFetching from './components/DataFetching';
import ComponentA from './components/nestedComponents/ComponentA';
import CounterReducerOne from './components/StateManagement/CounterOne'
import CounterReducerTwo from './components/StateManagement/CounterTwo';
import CounterReducerThree from './components/StateManagement/CounterThree';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

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
      <IntervalCounter></IntervalCounter>
      <DataFetching></DataFetching>
      <UserContext.Provider value={'Abbi'}>
        <ChannelContext.Provider value={'Nizar'}>
          <ComponentA></ComponentA>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <CounterReducerOne></CounterReducerOne>
      <CounterReducerTwo></CounterReducerTwo>
      <CounterReducerThree></CounterReducerThree>
    </div>
  );
}

export default App;
