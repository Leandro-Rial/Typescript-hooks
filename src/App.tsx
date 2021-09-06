import React from 'react';
import './App.css';
import CustomHookComponent from './hooks/CustomHookComponents';
import UseContextComponent from './hooks/UseContextComponent';
import UseEffectComponent from './hooks/UseEffectComponent';
import UseReducerComponent from './hooks/UseReducerComponent';
import UseRefComponent from './hooks/UseRefComponent';
import UseStateComponent from './hooks/UseStateComponent';

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <hr />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <hr />
      <h1>useContext</h1>
      <UseContextComponent />
      <hr />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <hr />
      <h1>useRef</h1>
      <UseRefComponent />
      <hr />
      <h1>CustomHook</h1>
      <CustomHookComponent />
    </div>
  );
}

export default App;
