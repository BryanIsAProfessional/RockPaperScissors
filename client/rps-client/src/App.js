import React, { useState } from 'react';
import './App.css';
import Matchmaking from './components/Matchmaking.js'
import Game from './components/Game.js';

function App() {
  const [socket, setSocket] = useState(null)

  return (
    <div className="App">
      {socket && socket instanceof WebSocket ? 
      <div>
        <p>{socket}</p>
        <Game socket={socket}/>
      </div>:
      <Matchmaking setSocket={setSocket}/>
      }
    </div>
  );
}

export default App;
