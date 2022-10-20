import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Reg from './Reg';
import Auth from './Auth';
import UserPage from './UserPage';
import PrivateRoute from './PrivateRoute';
import TeaCard from './TeaCard';

export default function App({ user, tea, filteredComments }) {
  const [currentUser, setCurrentUser] = useState(user || null);
console.log(currentUser);
  return (
    <div>
      <Navbar user={currentUser} setUser={setCurrentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea/:id" element={(<TeaCard tea={tea} filteredComments={filteredComments} user={currentUser} />)} />
        <Route path="/reg" element={<Reg setUser={setCurrentUser} />} />
        <Route path="/auth" element={<Auth setUser={setCurrentUser} />} />
        <Route path="/userpage" element={<PrivateRoute user={currentUser}><UserPage /></PrivateRoute>} />
      </Routes>
    </div>
  );
}
