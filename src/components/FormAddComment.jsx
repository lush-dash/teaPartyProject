import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function FormAddComment({ user, updateCurrComments, updateComments }) {
  const { id } = useParams();
  const [newCommentText, setNewCommentText] = useState('');

  const setNewComment = (e) => {
    setNewCommentText(e.target.value);
  };

  async function submitHandler(e) {
    e.preventDefault();
    const response = await fetch(`/api/tea/${id}/comment`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ newCommentText, userId: user.id }), // + тащить user.id, когда будет user
    });
    const data = await response.json();
    if (data.id) {
      updateCurrComments(data);
      updateComments(data);
      setNewCommentText('');
    }
  }

  return (
    <>
      <br />
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Оставить комментарий
            <textarea name="commentText" onChange={setNewComment} value={newCommentText || ''} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '40rem' }} />
          </label>
        </div>
        <button id="btn" type="submit" className="btn">Отправить</button>
      </form>
    </>

  );
}
