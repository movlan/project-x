import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      onClick={() => logout({ logoutParams: { returnTo: 'http://localhost:5173/logout' } })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
