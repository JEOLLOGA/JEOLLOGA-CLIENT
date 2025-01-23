import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  redirectPath: string;
  state?: { type: 'my' | 'wish' };
}

const PrivateRoute = ({ children, redirectPath, state }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem('Authorization');

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={state} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
