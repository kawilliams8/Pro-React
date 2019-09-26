import React from 'react';
import './App.css';
import AnimatedShoppingList from './AnimatedShoppingList';

function App() {
  return (
    <div className="App">
      <h2>Hover-based Color CSS Transition</h2>
      <button href="#" className="button" id="colorshift">
        Hover!
      </button>
      <h2>Keyframe-based Transformation</h2>
      <button href="#" className="button" id="pulseanimation">
        Hover!
      </button>
      <h2>Drag and Drop</h2>
      <AnimatedShoppingList/>
    </div>
  );
}

export default App;
