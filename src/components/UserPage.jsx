import React, { useState } from 'react';
import CommentsByTea from './CommentsByTea';
import FormNewTea from './FormNewTea';
import Teas from './Teas';

export default function UserPage({ user, teas, allComments }) {
  const [allTeas, setAllTeas] = useState(teas);
  console.log(user);
  function updateAllTeas(newTea) {
    setAllTeas((prev) => [newTea, ...prev]);
  }

  return (
    <>
      <br />
      {user?.isAdmin ? (
        <>
          <FormNewTea updateAllTeas={updateAllTeas} />
          <Teas allTeas={allTeas} />
        </>
      ) : (
        <>
          <h1>Комментарии</h1>
          <br />
          <CommentsByTea currentComments={allComments} />
        </>
      )}
    </>

  );
}
