import { useAuth0, User } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0<User>();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated &&
    user && (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <img className="w-24 h-24 rounded-full" src={user.picture} alt={user.name} />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-lg">{user.email}</p>
        <button
          className="flex gap-2 items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={goBack}
        >
          <ArrowLeft />
          Go Back
        </button>
      </div>
    )
  );
};

export default Profile;
