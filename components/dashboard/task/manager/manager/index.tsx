import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskList, TaskManagerHead } from '../../..';
import useSearch from '../../../../../hooks/useSearch';
import { RootState } from '../../../../../models/interfaces/common';
import { Task } from '../../../../../models/interfaces/dashboard';
import { getTasksById } from '../../../../../services/api/dashboard';
import { Container } from '../../../../ui';

interface Props {

}

const TasksManager: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    selectedProject: { id },
    tasks,
  } = useSelector((state: RootState) => state.dashboard);

  console.log(tasks);

  const { filteredData, handleOnChange } = useSearch<Task>(tasks ? tasks : []);

  return (
    <Container card='true'>
      <TaskManagerHead
        onChange={handleOnChange}
      />
      <TaskList
        filteredTasks={filteredData}
      />
    </Container>
  );
}

export default TasksManager;