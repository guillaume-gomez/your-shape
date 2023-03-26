import { useState } from 'react';
import './App.css';
import Drawer from "./Components/Drawer";

function App() {

  function onSubmit() {

  }

  return (
    <div className="App">
      <Drawer onSubmit={onSubmit} />
    </div>
  )
}

export default App
