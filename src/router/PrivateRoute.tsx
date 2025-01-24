import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  redirectPath: string;
  state?: { type: 'my' | 'wish' };
}

const PrivateRoute = ({ children, redirectPath, state }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('Authorization');
  const location = useLocation();

  if (!isAuthenticated) {
    const queryString = location.search;
    return (
      <Navigate
        to={`${redirectPath}${queryString}`}
        state={{ ...state, from: location.pathname, isPrivate: true }}
      />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
