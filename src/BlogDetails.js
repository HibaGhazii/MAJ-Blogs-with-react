import React from 'react'
import {useParams} from 'react-router-dom'
import UseFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

  return (
    <div className='create mx-60 my-10'>
        <h2 className='text-2xl font-bold'>Blog details - { id }</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>{ error }</div>}
        {blog && (
            <article>
                <h2 className='text-2xl text-pink-600 mt-5 '>{blog.title}</h2>
                <p className='mb-4'>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button
                    onClick={() => {
                      fetch('http://localhost:8000/blogs/' + blog.id, {
                        method: 'DELETE',
                      }).then(() => {
                        history.push('/');
                      });
                    }}
                    className="bg-pink-200 p-1.5 rounded-lg"
                  >
                    Delete
                  </button>
            </article>
        )}
    </div>
  );
}

export default BlogDetails;
