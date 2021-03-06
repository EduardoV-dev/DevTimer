import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../../models/interfaces/dashboard';
import { RootState } from '../../models/interfaces/common';

const useSelectTask = (task: Task) => {
  const dispatch = useDispatch();
  const { selectedTask } = useSelector((state: RootState) => state.dashboard);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedTask) return;
    if (selectedTask.id === task.id) return setActive(true);
    setActive(false);
  }, [selectedTask]);

  return { active, dispatch };
}

export default useSelectTask;