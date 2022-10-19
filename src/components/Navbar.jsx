import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      setUser(null);
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img src="https://cdn-icons-png.flaticon.com/512/2418/2418214.png" alt="tea-cup" width="30" height="30" className="d-inline-block align-text-center m-1 me-3 mb-2" />
          Tea Party
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {!user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/reg">Регистрация</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/auth">Вход</NavLink>
              </li>
            </>
            )}

            {user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/userpage">Личный кабинет</NavLink>
              </li>
              <li className="nav-item">
                <a onClick={logoutHandler} className="nav-link" href="/logout">Выход</a>
              </li>
            </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
