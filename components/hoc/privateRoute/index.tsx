import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { handleUserAuthChange } from '../../../services/api/signIn';
import { handlePrivateRouting } from '../../../utils/common';
import { LoadingIcon } from '../../icons';
import { Container } from '../../ui';

interface Props { }

const PrivateRoute = (Component: any) => (props: Props): JSX.Element => {
  Component.displayName = `withPrivateRoute(${Component.displayName || Component.name})`;
 
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const {
    ui: { isUiLoading },
    signIn: { user },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(handleUserAuthChange());
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