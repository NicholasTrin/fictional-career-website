import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

function Blog() {
  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        <li>
          <Link to="/blog/view_blogs" className="waves-effect waves-light btn" style={{margin:'0px 0px 50px'}}>
            View Blogs
          </Link>
        </li>
        {renderAuthenticationContent()}
      </ul>
    </div>
  );
}

function renderAuthenticationContent() {
  const { auth_state } = GetAuthState();
  if (auth_state !== null && auth_state !== false){
    return (
        <li>
          <Link to="/blog/create_blog" className="waves-effect waves-light btn">
            Post a Blog
          </Link>
        </li>
      );
  }
  else{
      return;
  }
}

function GetAuthState() {
  const auth_state = useSelector((state) => state.auth);
  return { auth_state };
}

export default Blog;
