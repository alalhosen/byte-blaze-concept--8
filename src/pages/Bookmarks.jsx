import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
  }, []);
  
  const handleDelete = (id) => {
    deleteBlog(id);
    const storedBlogs = getBlogs();
    setBlogs(storedBlogs);

  };
  if(blogs.length<1)return <h1>kichu nai vai</h1>
  return (
    <div className="grid px-4 sm:px-8 lg:px12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Bookmarks;
