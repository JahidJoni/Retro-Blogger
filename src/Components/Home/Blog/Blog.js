import React from "react"
import { Link } from "react-router-dom"
import "./Blog.css"

const Blog = props => {
  const LoggedInUser = JSON.parse(sessionStorage.getItem("user"))
  const { title, image, url, content} = props.blog
  return (
    <div className="row pb-4">
      <div className="col-md-5">
        <img className="blog-img" src={image} alt={title} />
      </div>
      <div className="col-md-6  ">
        <div>
          <h4 className="blog-title text-secondary">{title}</h4>

          <p className="blog-description ">
            {" "}
            {content}{" "}
          </p>
        </div>
        <div className="card-footer ">
        {LoggedInUser ? (
            <div
              className="fw-bolder"
            >
              <i className="fas fa-bookmark"></i> <a className="text-info" href={`${url}`} target="blank">
              ...Continue Reading
            </a>{" "}
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm fw-bolder text-uppercase text-secondary">
                <i className="fas fa-sign-in-alt"></i> Login To Continue Reading
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog;