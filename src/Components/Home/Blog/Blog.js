import React from "react"
import { Link } from "react-router-dom"
import "./Blog.css"

const Blog = props => {
  const LoggedInUser = JSON.parse(sessionStorage.getItem("user"))
  const { title, image, url, content } = props.blog


  return (
    <section className="pb-4">
      {
        LoggedInUser ? ( <a className="text-info blog-content" href={`${url}`} target="blank">
          <div className="row">
            <div className="col-md-5">
              <img className="blog-img" src={image} alt={title} />
            </div>
            <div className="col-md-6">
              <div>
                <h4 className="blog-title text-secondary">{title}</h4>

                <p className="blog-description text-secondary">
                  {" "}
                  {content}{" "}
                </p>
              </div>
              <div className="card-footer ">
                <div
                  className="fw-bolder"
                >
                  <i className="fas fa-bookmark"></i>
                    ...Continue Reading
                  {" "}
                </div>
              </div>
            </div>
          </div>
          </a>
        )

          : ( <Link to="/login" className="blog-content">
            <div className="row">
              <div className="col-md-5">
                <img className="blog-img" src={image} alt={title} />
              </div>
              <div className="col-md-6  ">
                <div>
                  <h4 className="blog-title text-secondary">{title}</h4>

                  <p className="blog-description text-secondary">
                    {" "}
                    {content}{" "}
                  </p>
                </div>
                <div className="card-footer ">
                  
                    <button className="btn btn-sm fw-bolder text-uppercase text-secondary">
                      <i className="fas fa-sign-in-alt"></i> Login To Continue Reading
                    </button>
                </div>
              </div>
            </div>
            </Link>
          )
      }
    </section>
  )
}

export default Blog;