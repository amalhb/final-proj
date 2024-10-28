import React from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Orders from '../Order/Orders';

function Client() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-200 to-purple-200">
      <Sidebar />
      <div className="flex-1 p-8">
        <Profile />
        <Orders />
      </div>
    </div>
  );
}

export default Client;
