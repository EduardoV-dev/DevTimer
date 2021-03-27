import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { getTasksById } from '../../../services/api/dashboard';

const withTaskSearch = (Component: React.FC<any>) => (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const {
    selectedProject: { id },
    tasks,
  } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => { dispatch(getTasksById(id)) }, [id]);

  if (!tasks) return null;
  Component.displayName = `withTaskSearch(${Component.displayName || Component.name})`;

  return (
    <Component
      {...props}
      {... {
        tasks,
      }}
    />
  );
}

export default withTaskSearch;