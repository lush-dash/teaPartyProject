import React, { useEffect, useState } from 'react';
import CommentsByTea from './CommentsByTea';
import FormNewTea from './FormNewTea';
import Teas from './Teas';

export default function UserPage({ user, teas, allComments }) {
  const [allTeas, setAllTeas] = useState(teas);
  const [currentComments, setCurrentComments] = useState(allComments);
  function updateAllTeas(newTea) {
    setAllTeas((prev) => [newTea, ...prev]);
  }

  function updateDeletedTeas(deletedTeaId) {
    console.log(deletedTeaId);
    setAllTeas(allTeas.filter((el) => el.id !== deletedTeaId));
  }

  useEffect(() => {
    fetch('/api/tea').then((res) => res.json()).then((data) => {
      setAllTeas(data.allTeas);
      setCurrentComments(data.allComments);
    });
  }, []);

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
          <CommentsByTea currentComments={currentComments} />
        </>
      )}
    </>

  );
}
