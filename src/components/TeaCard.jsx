import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormAddComment from './FormAddComment';
import CommentsByTea from './CommentsByTea';

export default function TeaCard({
  tea, filteredComments, user, updateComments,
}) {
  const { id } = useParams();
  const [currTea, setCurrTea] = useState(tea || null);
  const [currentComments, setCurrentComments] = useState(filteredComments || null);

  function updateCurrComments(newComment) {
    setCurrentComments((prev) => [newComment, ...prev]);
  }

  useEffect(() => {
    fetch(`/api/tea/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrTea(data.tea);
        setCurrentComments(data.filteredComments);
      });
  }, []);

  return (
    <>
      <div className="card" style={{ width: '40rem' }}>
        <div className="">
          {currTea?.img
            ? <img src={currTea.img} className="card-img-top img-fluid" alt="tea" />
            : <img src="https://www.foodandwine.com/thmb/Im6SgfreyeZWZ9Y87enUuQzSJCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/different-types-of-tea-FT-BLOG0621-7c7fd231e66d4fea8ca9a47cad52ba79.jpg" className="card-img-top img-fluid" alt="tea" /> }
        </div>
        <div className="card-body">
          <span className="badge rounded-pill" style={{ backgroundColor: '#606c38' }}>{currTea?.place}</span>
          <br />
          <br />
          <h5 className="card-title">{currTea?.title}</h5>
          <p className="card-text">{currTea?.description}</p>
        </div>
      </div>
      <br />
      {user && (
      <>
        <FormAddComment updateComments={updateComments} updateCurrComments={updateCurrComments} user={user} />
        <br />
      </>
      )}
      <CommentsByTea currentComments={currentComments} />
      <br />
    </>
  );
}
