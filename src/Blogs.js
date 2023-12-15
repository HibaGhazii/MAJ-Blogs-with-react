import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Blogs = ({blogs}) => {

  const history = useHistory();


  return (
    <div className="my-10 p-10 ">
            {blogs.map((blog) => (
                <div key={blog.id} className="flex flex-row justify-around items-center p-4 md:p-6 mb-5 md:mb-8 border-b border-gray-100 hover:shadow-md transition-all duration-300">
                    <Link to={`/blogs/${blog.id}`}>
                      
                      <div>
                        <h1 className="text-xl text-pink-500 mb-2">{blog.title}</h1>
                        <p className="text-sm text-gray-600 mb-1">Written by {blog.author}</p>
                      </div>
                      
                    </Link>
                    <div className="mt-4">
                    <button
                    onClick={() => {
                      console.log(blog.id);
                      fetch(`http://localhost:8000/blogs/${blog.id}`, {
                        method: 'DELETE',
                      }).then(() => {
                        window.location.replace('/');
                      });
                    }}
                    className="bg-pink-200 p-1.5 rounded-lg"
                  >
                    Delete
                  </button>
                    </div>
                </div>
            ))}
    </div>
  );
}

export default Blogs;