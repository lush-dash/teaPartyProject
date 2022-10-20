import React, { useState } from 'react';
import CommentsByTea from './CommentsByTea';
import FormNewTea from './FormNewTea';
import Teas from './Teas';

export default function UserPage({ user, teas }) {
  const [allTeas, setAllTeas] = useState(teas);

  function updateAllTeas(newTea) {
    setAllTeas((prev) => [newTea, ...prev]);
  }

  return (
    <>
      <br />
      {user ? ( // user.isAdmin
        <>
          <FormNewTea updateAllTeas={updateAllTeas} />
          <Teas allTeas={allTeas} />
        </>
      ) : (<CommentsByTea />)}
    </>

  );
}
