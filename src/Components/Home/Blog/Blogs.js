import React, { useEffect, useState } from "react"
import Blog from "./Blog"

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://hidden-shelf-25964.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    // console.log(blogs);

  return (
    <section className="">
      <h2
        style={{ fontWeight: 700 }}
        className="text-secondary text-center"
      >
        <i className="fas fa-upload"></i> RECENTLY PUBLISHED
      </h2>
      <hr className="container coloured-line mt-4"/>
      <div className="d-flex justify-content-center align-items-center">
        <div className="container mt-3">
          {blogs.map(blog => (
            <Blog key={blog._id} blog={blog}>
              {" "}
            </Blog>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs;