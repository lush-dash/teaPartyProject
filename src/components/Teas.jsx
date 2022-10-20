import React from 'react';
import OneTea from './OneTea';

export default function Teas({ allTeas }) {
  return (
    <>
      <br />
      <h1>Все чаи</h1>
      {allTeas?.length ? allTeas.map((el) => <OneTea key={el.id} oneTea={el} />) : 'Чаи пока не добавлены'}
    </>
  );
}
