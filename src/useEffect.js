import Blogs from "./Blogs";
import UseFetch from "./useFetch";

function UseEffect () {
    const {data: blogs, pending,error} = UseFetch('http://localhost:8000/blogs');
    return(
        <div>
            {error && <div>{error}</div>}
            {pending && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs} />}
            {/* <Blogs blogs={blogs.filter((blog) => blog.author === 'mario')} title="Filter Filter"/> */}
        </div>
    );
}

export default UseEffect;