import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TeaCard from './TeaCard';

export default function App({ tea }) {
  return (
    <div className="container">
      Hello World
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/tea/:id"
          element={(<TeaCard tea={tea} />)}
        />
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
      </Routes>
    </div>
  );
}
