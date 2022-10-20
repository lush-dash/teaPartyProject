import React from 'react';
import OneTea from './OneTea';

export default function Teas({ teas }) {
  return (
    <>
      <br />
      <h1>Все чаи</h1>
      {teas?.length ? teas.map((el) => <OneTea key={el.id} oneTea={el} />) : 'Чаи пока не добавлены'}
    </>
  );
}
