import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
