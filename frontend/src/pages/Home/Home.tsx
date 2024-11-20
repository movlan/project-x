import React from 'react';
import LogoutButton from '../../components/LogoutButton';
import LoginButton from '../../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="flex flex-col justify-center items-center h-screen">Loading ...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>BlogX</h1>

      <p>Welcome to BlogX</p>

      <div>Home Page Coming Soon</div>

      {isAuthenticated ? (
        <div className="flex flex-col gap-4 items-center">
          <LogoutButton />
          <Link to="/profile">Profile</Link>
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Home;
