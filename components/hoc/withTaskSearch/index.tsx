import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { TaskOrderBy } from '../../../models/types/common';
import { getTasksById } from '../../../services/api/dashboard';

const withTaskSearch = (Component: React.FC<any>) => (props: any): JSX.Element => {
  const [orderBy, setOrderBy] = useState<TaskOrderBy>('latestUpdate');
  const dispatch = useDispatch();
  const {
    selectedProject: { id },
    tasks,
  } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => { dispatch(getTasksById(id, orderBy)) }, [id, orderBy]);

  if (!tasks) return null;
  Component.displayName = `withTaskSearch(${Component.displayName || Component.name})`;

  return (
    <Component
      {...props}
      {... {
        tasks,
        setOrderBy,
      }}
    />
  );
}

export default withTaskSearch;