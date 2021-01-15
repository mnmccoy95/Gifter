import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory()
  const existDialog = useRef()

  let user = localStorage.getItem('userProfile');

  const loginChecker = () => {
    if (user !== null) {
      return <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Feed
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/posts/add" className="nav-link">
            New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#" onClick={() => {
            existDialog.current.showModal()
          }
          }>Logout</Link>
        </li>
      </ul>
    } else {
      return <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>

      </ul>
    }
  }

  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <dialog className="logout--dialog" ref={existDialog}>
        <div>Are you sure you want to logout?</div>
        <button className="logout--yes" onClick={() => {
          const userId = localStorage.getItem('userProfile');
          localStorage.clear(userId);
          history.push("/login");
          existDialog.current.close()
          window.location.reload();
        }}>Logout</button>
        <button className="logout--no" onClick={e => existDialog.current.close()}>Close</button>
      </dialog>
      <Link to="/" className="navbar-brand">
        GiFTER
      </Link>
      {loginChecker()}

    </nav>
  );
};

export default Header;