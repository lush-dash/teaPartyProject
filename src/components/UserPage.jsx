import React from 'react';
import CommentsByTea from './CommentsByTea';
import FormNewTea from './FormNewTea';
import Teas from './Teas';

export default function UserPage({ user, teas }) {
  return (
    <>
      <br />
      {user ? ( // user.isAdmin
        <>
          <FormNewTea />
          <Teas teas={teas} />
        </>
      ) : (<CommentsByTea />)}
    </>

  );
}
