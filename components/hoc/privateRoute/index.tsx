import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/general';
import { handlePrivateRouting, handleUserAuthChange } from '../../../utils/general';

interface Props { }

const PrivateRoute = (Component: any) => (props: Props): JSX.Element => {
  Component.displayName = `withPrivateRoute(${Component.displayName || Component.name})`;
 
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const {
    ui: { isUiLoading },
    auth: { user },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    handleUserAuthChange(dispatch);
    if (user !== undefined)
      handlePrivateRouting({
        pathname,
        user,
        push,
      });
  }, [user]);

  switch (pathname) {
    case '/':
      return (
        <>
          {(!isUiLoading && user === null) && (
            <Component {...props} />
          )}
        </>
      );
    case '/dashboard':
      return (
        <>
          {(!isUiLoading && user !== null) && (
            <Component {...props} />
          )}
        </>
      );
  }
}

export default PrivateRoute;