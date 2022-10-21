import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export default function CommentsItem({ comment }) {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/tea/${comment?.Tea?.id}`);
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{comment?.User.name}</div>
        {comment?.text}
      </div>
      <span className="badge bg-primary rounded-pill bg-success">{JSON.stringify(comment?.createdAt).slice(1, 11)}</span>
      <a onClick={clickHandler} className="badge bg-primary rounded-pill bg-success">{comment?.Tea?.title}</a>
    </li>
  );
}
