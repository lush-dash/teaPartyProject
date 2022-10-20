import React, { useState } from 'react';
import CommentsByTea from './CommentsByTea';
import FormNewTea from './FormNewTea';
import Teas from './Teas';

export default function UserPage({ user, teas, allComments }) {
  const [allTeas, setAllTeas] = useState(teas);
  function updateAllTeas(newTea) {
    setAllTeas((prev) => [newTea, ...prev]);
  }

  function updateDeletedTeas(deletedTeaId) {
    console.log(deletedTeaId);
    setAllTeas(allTeas.filter((el) => el.id !== deletedTeaId));
  }

  return (
    <>
      <br />
      {user?.isAdmin ? (
        <>
          <FormNewTea updateAllTeas={updateAllTeas} />
          <Teas updateDeletedTeas={updateDeletedTeas} allTeas={allTeas} />
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
