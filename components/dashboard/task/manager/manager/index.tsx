import React from 'react';
import { TaskList, TaskManagerHead } from '../../..';
import useSearch from '../../../../../hooks/useSearchAndFilter';
import { Task } from '../../../../../models/interfaces/dashboard';
import { TaskOrderBy } from '../../../../../models/types/common';
import withTaskSearch from '../../../../hoc/withTaskDataFetch';
import { Container } from '../../../../ui';

interface Props {
  tasks?: Task[];
  active: any;
  handleOrder: (orderBy: TaskOrderBy) => void;
}

const TasksManager: React.FC<Props> = ({
  tasks,
}): JSX.Element => {
  const {
    order,
    filteredData,
    handleOnChange,
    handleOrderChange,
  } = useSearch(tasks);

  return (
    <Container card='true'>
      <TaskManagerHead
        onChange={handleOnChange}
        {... {
          tasks,
          order,
          handleOrderChange,
        }}
      />
      <TaskList
        filteredTasks={filteredData}
      />
    </Container>
  );
}

export default withTaskSearch(TasksManager);