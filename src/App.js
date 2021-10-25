import React from 'react'
import ReactDOM from 'react-dom'
import "./App.css";
import Quote from "./Quote/Quote";
import Todos from "./Todo/Todos";

function App() {
  return (
    <div className="app">
      <Quote />
      <Todos />
    </div>
  );
}
export default App;
