import React from 'react'
import UseState from './UseState/UseState'
import UseReducer from './UseReducer/UseReducer';
import UseEffect from './UseEffect/UseEffect';
import UseRef from './UseRef/UseRef';
import './App.css';


function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <UseEffect />
      <UseRef />
    </div>
  );
}

export default App;
