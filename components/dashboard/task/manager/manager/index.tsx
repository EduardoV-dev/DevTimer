import React from 'react';
import { TaskList, TaskManagerHead } from '../../..';
import useSearch from '../../../../../hooks/useSearch';
import { Task } from '../../../../../models/interfaces/dashboard';
import { TaskOrderBy } from '../../../../../models/types/common';
import withTaskSearch from '../../../../hoc/withTaskSearch';
import { Container } from '../../../../ui';

interface Props {
  tasks?: Task[];
  orderBy: TaskOrderBy;
  setOrderBy: React.Dispatch<React.SetStateAction<TaskOrderBy>>;
}

const TasksManager: React.FC<Props> = ({
  tasks,
  setOrderBy,
}): JSX.Element => {
  const { filteredData, handleOnChange } = useSearch<Task>(tasks);

  return (
    <Container card='true'>
      <TaskManagerHead
        onChange={handleOnChange}
        {... {
          setOrderBy,
        }}
      />
      <TaskList
        filteredTasks={filteredData}
      />
    </Container>
  );
}

export default withTaskSearch(TasksManager);