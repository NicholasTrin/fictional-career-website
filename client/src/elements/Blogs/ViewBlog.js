import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../actions/index";

function ViewBlog() {
  return <div>{RenderBlog()}</div>;
}

function RenderBlog() {
  let location = useLocation();
  let {blog_id} = location.state
  console.log(blog_id);
  let dispatch = useDispatch();
  const blog = FetchBlog();
 
  if (blog === null) {
    dispatch(actions.fetchBlog(blog_id));
    return;
  } else {
    return blog.map(
      ({
        title,
        body,
        like,
        dislike,
        dateSubmitted,
        lastUpdated,
        _id,
        comments,
        _user,
      }) => {
        const comment_component = comments.map(({ comment }) => {
          return <div>{comment}</div>;
        });
        let parsed_submit_date = Date(dateSubmitted)
          .split(" ")
          .slice(0, 5)
          .join(" ");
        let parsed_update_date = Date(lastUpdated)
          .split(" ")
          .slice(0, 5)
          .join(" ");
        return (
          <div key={_id} className="row">
            <div className="right">
              <h6>Date Posted: {parsed_submit_date}</h6>
            </div>
            <div className="leftcolumn">
              <h3>{title}</h3>
            </div>
            <div className="body">
              <p>{body}</p>
            </div>
            <div className="votes">
              <span className="leftcolumn">Likes:{like}</span>
              <span className="right">Dislikes: {dislike}</span>
            </div>
            <div className="lastupdate">
              <span className="leftcolumn">
                Last Updated: {parsed_update_date}
              </span>
            </div>
            <div className="bottom">{comment_component}</div>
          </div>
        );
      }
    );
  }
}

function FetchBlog() {
  const blog = useSelector((state) => state.blog);
  return blog;
}


export default ViewBlog;
