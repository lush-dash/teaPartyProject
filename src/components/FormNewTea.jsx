import React from 'react';

export default function FormNewTea({ updateAllTeas }) {
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/tea/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    const data = await response.json();
    if (data.id) {
      updateAllTeas(data);
    }
  };

  return (
    <>
      <br />
      <h1>Добавить чай</h1>
      <br />
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Название чая
            <input name="title" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Страна
            <input name="place" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ссылка на фото
            <input name="img" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Описание
            <textarea name="description" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    </>
  );
}
