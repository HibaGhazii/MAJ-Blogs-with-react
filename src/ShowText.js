import './App.css';
import { useState } from 'react';

function App() {
  let [showText,setshowText] = useState(true);

  return (
    <div className='App'>
      <button onClick={() => {
        setshowText(!showText)
      }}> Show/Hide </button>
      {showText && <h1>Show or hide</h1>}
    </div>
  );
}

export default App;
