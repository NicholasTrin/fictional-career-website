import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/index";
function ViewBlogs() {
  return <div>{RenderBlogs()}</div>;
}

function RenderBlogs() {
  const blogs = FetchBlogs();
  const dispatch = useDispatch();
  let key = -1;
  if (blogs === null) {
    return;
  } else {
    return blogs.map(
      ({ title, like, dislike, dateSubmitted, lastUpdated, _id }) => {
        
        let parsed_submit_date = Date(dateSubmitted)
          .split(" ")
          .slice(0, 5)
          .join(" ");
        let parsed_update_date = Date(lastUpdated)
          .split(" ")
          .slice(0, 5)
          .join(" ");
        let blog_fetch_url = `/blog/view_blogs/${_id}`;
        key = key + 1;
        return (
          <div key={key} className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{title}</span>
                  <div className="date">Posted: {parsed_submit_date}</div>
                  <div className="date">Last Updated: {parsed_update_date}</div>
                  <div className="left likes">Likes: {like}</div>
                  <div className="right dislikes">Dislikes: {dislike}</div>
                </div>
                <div className="card-action">
                  <Link to={blog_fetch_url} state={{blog_id:_id}} >
                    To Post
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }
    );
  }
} 
//onClick={() => dispatch(actions.fetchBlog(_id))}
function FetchBlogs() {
  const blogs = useSelector((state) => state.blogs);
  return blogs;
}

export default ViewBlogs;
