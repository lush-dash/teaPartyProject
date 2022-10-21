import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Reg from './Reg';
import Auth from './Auth';
import UserPage from './UserPage';
import PrivateRoute from './PrivateRoute';
import TeaCard from './TeaCard';
import Map from './Map';

export default function App({
  user, tea, filteredComments, teas, allComments,
}) {
  const [currentUser, setCurrentUser] = useState(user || null);
  const [allUpdatedComments, setAllUpdatedComments] = useState(allComments);

  const updateComments = (newComment) => {
    console.log(newComment);
    setAllUpdatedComments((prev) => [newComment, ...prev]);
  };

  return (
    <div>
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/tea/:id" element={(<TeaCard updateComments={updateComments} tea={tea} filteredComments={filteredComments} user={currentUser} />)} />
          <Route path="/reg" element={<Reg setUser={setCurrentUser} />} />
          <Route path="/auth" element={<Auth setUser={setCurrentUser} />} />
          <Route
            path="/userpage"
            element={(
              <PrivateRoute user={currentUser}>
                <UserPage allUpdatedComments={allUpdatedComments} teas={teas} user={currentUser} />
                <br />
                <Map />
                <br />
              </PrivateRoute>
)}
          />
        </Routes>
      </div>
    </div>
  );
}
