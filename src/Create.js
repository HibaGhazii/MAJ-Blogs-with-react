import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('');
  const [pending, setPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};
    setPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setPending(false);
      history.push('/');
    })
  }
  
  return (
    <div className='flex flex-col justify-center text-center items-center'>
      <h2 className='text-2xl font-bold mt-5 text-pink-400 mb-5'>Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-left block ml-2 font-bold">Blog title:</label>
        <input type="text" required value={title} onChange={(e)=> {setTitle(e.target.value)}} className="focus:outline-none w-96 px-4 py-3 mx-2 border border-solid border-gray-300 box-border block mb-5"/>

        <label className="text-left block ml-2 font-bold">Blog body:</label>
        <textarea required value={body} onChange={(e)=>{setBody(e.target.value)}} className="focus:outline-none w-96 px-4 py-3 mx-2 border border-solid border-gray-300 box-border block mb-5"></textarea>

        <label className="text-left block ml-2 font-bold">Blog author:</label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)} className="focus:outline-none w-96 px-4 py-3 mx-2 border border-solid border-gray-300 box-border block mb-2">
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!pending && <button className="bg-pink-500 text-white border-0 py-2 px-4 mt-1 rounded-md cursor-pointer ">Add Blog</button>}
        
      </form>
    </div>
  )
}

export default Create
