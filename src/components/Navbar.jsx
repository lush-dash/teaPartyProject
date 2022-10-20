import React from 'react';
import {
  Link, NavLink, redirect, useNavigate,
} from 'react-router-dom';

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

  // const handleMap = (e) => {
  //   fetch('./')
  // };

  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Tea Party</Link>
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
                <a className="nav-link" href="/logout">Выход</a>
              </li>
            </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
