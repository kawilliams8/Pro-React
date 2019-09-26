import React from 'react';
import './App.css';
import AnimatedShoppingList from './AnimatedShoppingList';
import Container from './Container';

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
      <h2>ReactCSSTransitionGroup Animations</h2>
      <AnimatedShoppingList/>
      <h2>Drag and Drop with react-dnd</h2>
      <Container />
    </div>
  );
}

export default App;
