import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar'
import './ManageBlog.css'

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [deleteBlog, setDeleteBlog] = useState([]);

    useEffect(() => {
        fetch('https://hidden-shelf-25964.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    const handleDelete = (id) => {
        const remainingBlog = deleteBlog.filter(items => items._id !== id);

        fetch(`https://hidden-shelf-25964.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                res.json()
            })
            .then(data => {
                setDeleteBlog(remainingBlog);
                alert('Blog Deleted')
            });
    }

    return (
        <div className="row mt-3">
            <div className="col-md-2">
                <SideBar></SideBar>
            </div>
            <div className="col-md-8 mt-4 text-center">
               <div className="p-5 ms-5">
               <h3 style={{ color: '#0bff96' }}>Current Blogs - </h3>
                <div className="d-flex justify-content-center align-items-center">
                    <table className="mt-5 styled-table p-5">
                        <thead>
                            <tr>
                                <th>Blog Title</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            blogs.map(blog => <tr>
                                <td>{blog.title}</td>
                                <td><button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(blog._id)}>Delete</button> </td>
                            </tr>)
                        }
                    </table>
                </div>
               </div>
            </div>
        </div>
    );
};

export default ManageBlogs;