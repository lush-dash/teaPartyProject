import React, { useEffect } from 'react';
import init from '../../public/mymap';
// const { init } = require('../../public/mymap');

export default function Map() {
  // const tea = { name: 'title' };

  useEffect(() => {
    ymaps.ready(init);
  }, []);
  return (
    <div id="map" style={{ width: 1150, height: 500 }} />
  );
}
