import './App.css';
import { useState } from 'react';

function Todolist() {
  const [todolist,setTodolist] = useState([]);
  const [inputValue, setInputValue] = useState("");

   const handleChange=(event) => {
    setInputValue(event.target.value);
  }

  const addTask = () => {
    const task = { 
      id: todolist.length === 0 ? 1 : todolist[todolist.length-1].id +1 ,
      taskName: inputValue 
    }
    setTodolist([...todolist, task]);
  }

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id ));
  };

  return (
    <card className="flex flex-col justify-center items-center mt-10 border border-solid border-mediumblue p-4 shadow">
      <div >
        <input type="text" className="w-64 p-2 pl-4 ps-5 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none" onChange={handleChange}/>
        <button onClick={addTask} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-r-lg text-sm px-4 py-2 me-2 mb-2 dark:hover:bg-blue-700 border border-blue-700">Add Task</button>
        <br />
      </div>
      <div className='list'>
        {todolist.map((task,key) => {
          return (
            <div className="text-center flex flex-row border border-solid border-mediumblue p-2 mb-1"> 
                <h3 key={key} className=" mb-1 w-24">{task.taskName}</h3>
                <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-2 py-0.5 dark:hover:bg-blue-700 ml-1 mb-1" onClick={() => deleteTask(task.id)}> X </button>
            </div>
          )
        })}
        
      </div>
    </card>
  );
}

export default Todolist;
