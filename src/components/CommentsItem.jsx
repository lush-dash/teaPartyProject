import React from 'react';

export default function CommentsItem({ comment }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{comment?.User.name}</div>
        {comment?.text}
      </div>
      <div className="flex-comment">
        <span className="badge rounded-pill mb-2 flex-comment-item" style={{ backgroundColor: '#606c38' }}>{JSON.stringify(comment?.createdAt).slice(1, 11)}</span>
        <span className="badge rounded-pill flex-comment-item" style={{ backgroundColor: '#606c38' }}>{comment?.Tea?.title}</span>
      </div>
    </li>
  );
}
