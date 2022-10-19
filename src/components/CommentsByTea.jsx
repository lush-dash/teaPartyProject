import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsItem from './CommentsItem';

export default function CommentsByTea(allComments) {
  const { id } = useParams();
  const [currentComments, setCurrentComments] = useState(allComments);

  useEffect(() => {
    setCurrentComments(currentComments.filter((el) => el.tea_id === id));
  }, []);

  return (
    <ul className="list-group">
      {currentComments?.length ? currentComments.map((el) => <CommentsItem comment={el} />) : 'There are no comments'}
    </ul>
  );
}
