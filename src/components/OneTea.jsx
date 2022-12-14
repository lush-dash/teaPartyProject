import React from 'react';

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
      <div className="card mb-3" style={{ width: '700px' }}>
        <div className="flex-tea-item">
          <div className="tea-img">
            <img
              src={currTea.img}
              className="img-fluid rounded-start"
              alt="tea"
              style={{
                width: '300px', height: '200px', overflow: 'hidden',
              }}
            />
          </div>
          <div className="tea-info">
            <div className="card-body">
              <h5 className="card-title">{currTea.title}</h5>
              <p className="card-text">{currTea.description}</p>
              <p className="card-text"><small className="text-muted">{currTea.place}</small></p>
              <button onClick={clickHandler} type="button" className="btn" id="delete">Удалить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}