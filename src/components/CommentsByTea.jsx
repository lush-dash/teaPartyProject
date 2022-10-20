import React from 'react';
import CommentsItem from './CommentsItem';

export default function CommentsByTea({ currentComments }) {
  return (
    <ul className="list-group">
      {currentComments?.length ? currentComments.map((el) => <CommentsItem key={el.id} comment={el} />) : 'Здесь пока нет комментариев'}
    </ul>
  );
}
