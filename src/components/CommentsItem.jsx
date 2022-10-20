import React from 'react';

export default function CommentsItem({ comment }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{comment.User.name}</div>
        {comment.text}
      </div>
      <span className="badge bg-primary rounded-pill bg-success">{JSON.stringify(comment.createdAt).slice(1, 11)}</span>
    </li>
  );
}
