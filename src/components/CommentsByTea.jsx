import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentsItem from './CommentsItem';

export default function CommentsByTea({ filteredComments }) {
  const { id } = useParams();
  const [currentComments, setCurrentComments] = useState(filteredComments);

  return (
    <ul className="list-group">
      {currentComments?.length ? currentComments.map((el) => <CommentsItem key={el.id} comment={el} />) : 'There are no comments'}
    </ul>
  );
}
