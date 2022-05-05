import react from "react";

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="website-tag left">
          Fictional Career
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
