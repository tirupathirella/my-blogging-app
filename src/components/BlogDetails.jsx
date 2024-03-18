import { useParams ,useHistory } from "react-router-dom";
import useFetch from "../helper/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();
    const url='http://localhost:8000/blogs/';
    const { data : blog , isPending , error} = useFetch( url + id)

    const handleDelete = () => {
        fetch(url+id,{
            method:'DELETE'
        }).then(()=>{
            console.log('blog deleted');
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
           { isPending && <div> Loading... </div> }
           { error && <> {error} </>}
           { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p> Written by {blog.author}</p>
                <div> {blog.body}</div>
                <button onClick={handleDelete}> delete </button>
            </article>
           )}
        </div>
     );
}
 
export default BlogDetails;