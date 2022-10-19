import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FormAddComment({ user }) {
  const { id } = useParams();
  const [newCommentText, setNewCommentText] = useState('');

  const setNewComment = (e) => {
    setNewCommentText(e.target.value);
  };
  console.log(id);

  async function submitHandler(e) {
    e.preventDefault();
    console.log(newCommentText);
    const response = await fetch(`/api/tea/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ newCommentText }), // + тащить user.id, когда будет user
    });
    if (response.ok) {
      setNewCommentText('');
    }
  }

  return (
    <>
      <br />
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Leave a comment
            <textarea name="commentText" onChange={setNewComment} value={newCommentText || ''} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '40rem' }} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </>

  );
}
