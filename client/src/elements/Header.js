import React from "react";
import { useSelector } from "react-redux";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="website-tag left">
          Fictional Career
        </a>
        <ul id="nav-mobile" className="right">
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
      return <a href="/api/logout">Logout</a>;
  }
}

function GetAuthState() {
  const auth_state = useSelector((state) => state.auth);
  return { auth_state };
}

export default Header;
