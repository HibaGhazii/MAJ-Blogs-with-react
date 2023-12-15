import './App.css';
import { useState } from 'react';

function ShowInput() {
  let [inputValue,setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className='App'>
      <input type='text' onChange={handleChange}/>
      <br/>
      {inputValue}
    </div>
  );
}

export default ShowInput;
