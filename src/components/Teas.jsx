import React from 'react';
import OneTea from './OneTea';

export default function Teas({ allTeas, updateDeletedTeas }) {
  return (
    <div className="mb-5">
      <h1>Все чаи</h1>
      {allTeas?.length ? allTeas.map((el) => <OneTea updateDeletedTeas={updateDeletedTeas} key={el.id} currTea={el} />) : 'Чаи пока не добавлены'}
    </div>
  );
}
