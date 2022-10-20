import React from 'react';

export default function OneTea({ oneTea }) {
  return (
    <>
      <br />
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={oneTea.img} className="img-fluid rounded-start" alt="tea" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{oneTea.title}</h5>
              <p className="card-text">{oneTea.description}</p>
              <p className="card-text"><small className="text-muted">{oneTea.place}</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
