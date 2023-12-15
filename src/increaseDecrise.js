import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  return (
    <div className='App'>
      <button onClick={() => {
        setCount(count+1);
      }
      }>Increase</button>
      <button onClick={() => {
        setCount(count-1);
      }}>Decrase</button>
      <button onClick={()=>{
        setCount(0);
      }}>Set to zero</button>
      <br />
      {count}
    </div>
  );
}

export default App;
