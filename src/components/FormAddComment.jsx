import React from 'react';

export default function FormAddComment() {
  return (
    <>
      <br />
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Leave a comment
            <textarea type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ width: '40rem' }} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </>

  );
}
