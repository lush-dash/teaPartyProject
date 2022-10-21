import React from 'react';
import { useParams } from 'react-router-dom';

export default function OneTea({ currTea, updateDeletedTeas }) {
  const clickHandler = async () => {
    const response = await fetch(`/api/tea/${currTea.id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      updateDeletedTeas(currTea.id);
    }
  };

  return (
    <>
      <br />
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={currTea.img} className="img-fluid rounded-start" alt="tea" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{currTea.title}</h5>
              <p className="card-text">{currTea.description}</p>
              <p className="card-text"><small className="text-muted">{currTea.place}</small></p>
              <button onClick={clickHandler} type="button" className="btn btn-danger">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
