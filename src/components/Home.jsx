import React from "react";
import BlogList from "./BlogList";
import useFetch from "../helper/useFetch";
const Home = () => {
    const url='http://localhost:8000/blogs';
    const { data:blogs , isPending , error } = useFetch(url)
   
    return (
      <React.Fragment>
        <div className="home">
          {error && <> {error} </>}
          {isPending && <div> Loading ...</div>}
          {blogs && <BlogList blogs={blogs} title={"All Blogs!"}></BlogList>}
        </div>
      </React.Fragment>
    );
}
 
export default Home;