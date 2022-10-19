import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormAddComment from './FormAddComment';
import CommentsByTea from './CommentsByTea';

export default function TeaCard({ tea }) {
  const { id } = useParams();
  const [currTea, setCurrTea] = useState(tea);

  useEffect(() => {
    if (!currTea) {
      fetch(`/api/tea/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrTea(data);
        });
    }
  }, [currTea]);

  return (
    <>
      <div className="card" style={{ width: '40rem' }}>
        {currTea.img
          ? <img src={currTea.img} className="card-img-top" alt="tea" />
          : <img src="https://www.foodandwine.com/thmb/Im6SgfreyeZWZ9Y87enUuQzSJCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg" className="card-img-top" alt="tea" /> }

        <div className="card-body">
          <h5 className="card-title">{currTea.title}</h5>
          <p className="card-text">{currTea.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{currTea.place}</li>
        </ul>
      </div>
      <br />
      <FormAddComment />
      <br />
      {/* <CommentsByTea /> */}
      <br />
    </>
  );
}
