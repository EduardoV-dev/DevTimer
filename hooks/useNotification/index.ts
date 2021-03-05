import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../models/interfaces/common';
import { hideNotificationAction } from '../../redux/ducks/ui';

const useNotification = () => {
  const {
    isNotificationShown,
    notification,
  } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(hideNotificationAction());
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isNotificationShown]);

  return { isNotificationShown, notification };
}

export default useNotification;