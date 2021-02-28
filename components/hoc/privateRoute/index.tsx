import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/general';
import { handleUserAuthChange } from '../../../utils/general';

interface Props {
  redirectTo?: string;
}

const PrivateRoute = (Component: React.FC) => (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const {
    ui: { isUiLoading },
    auth: { user },
  } = useSelector((state: RootState) => state);

  useEffect(() => handleUserAuthChange(dispatch), []);

  if (user) {
    push('/dashboard');
    return null;
  }
  return (  
    <Component {...props} />
  );
}

export default PrivateRoute;