import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({ setUser }) {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Электронная почта
            <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
            <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-success">Войти</button>
      </form>
    </div>
  );
}

export default Auth;
