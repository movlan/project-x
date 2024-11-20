import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOut: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-2xl text-center">You have been successfully logged out</div>
      <Link className="mt-4 text-blue-500" to="/">
        Go to Home
      </Link>
    </div>
  );
};

export default LoggedOut;
