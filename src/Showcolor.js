import './App.css';
import { useState } from 'react';

function App() {
  let [TextColor,setTextColor] = useState("");

  return (
    <div className='App'>
      <button onClick={() => {
        setTextColor(TextColor === "black" ? "red" : "black" );  
      }}>Change it</button>

      <h1 style={{color: TextColor}}>Color change</h1>
    </div>
  );
}

export default App;
