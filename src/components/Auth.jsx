import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth({ setUser }) {
  const [error, setError] = useState(null);
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

    const data = await response.json();
    if (response.ok) {
      setUser(data);
      navigate('/');
    } else {
      setError(data.message);
    }
  };

  return (
    <div>
      <h1>Вход</h1>
      {error && <p style={{ color: '#AC4425' }}>{error}</p>}
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
        <button id="btn" type="submit" className="btn">Войти</button>
      </form>
    </div>
  );
}

export default Auth;
