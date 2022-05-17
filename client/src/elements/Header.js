import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to='/' className="website-tag left">
          Nick's House
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {renderAuthenticationContent()}
        </ul>
      </div>
    </nav>
  );
}

function renderAuthenticationContent() {
  const { auth_state } = GetAuthState();
  switch (auth_state) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href="/auth/google">Login with google</a>
        </li>
      );
    default:
      return (
        <li>
          <a href="/api/logout">Logout</a>
        </li>
      );
  }
}

function GetAuthState() {
  const auth_state = useSelector((state) => state.auth);
  return { auth_state };
}

export default Header;
