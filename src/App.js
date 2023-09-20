import React, { useState } from 'react';
import './App.css';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const boxSize = 500; // Set the size of the box
  const blockSize = 50; // Set the size of the small block

  const handleMove = (direction) => {
    const { x, y } = position;

    switch (direction) {
      case 'up':
        if (y > -boxSize / 2 + blockSize / 2) {
          setPosition({ x, y: Math.max(y - 10, -boxSize / 2 + blockSize / 2) });
        }
        break;
      case 'bottom':
        if (y < boxSize / 2 - blockSize / 2) {
          setPosition({ x, y: Math.min(y + 10, boxSize / 2 - blockSize / 2) });
        }
        break;
      case 'left':
        if (x > -boxSize / 2 + blockSize / 2) {
          setPosition({ x: Math.max(x - 10, -boxSize / 2 + blockSize / 2), y });
        }
        break;
      case 'right':
        if (x < boxSize / 2 - blockSize / 2) {
          setPosition({ x: Math.min(x + 10, boxSize / 2 - blockSize / 2), y });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="box">
        <div className="side-label up" onClick={() => handleMove('up')}>Up</div>
        <div className="side-label left" onClick={() => handleMove('left')}>Left</div>
        <div className="small-block" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}></div>
        <div className="side-label right" onClick={() => handleMove('right')}>Right</div>
        <div className="side-label bottom" onClick={() => handleMove('bottom')}>Bottom</div>
      </div>
    </div>
  );
}

export default App;
