import { useState } from 'react';
import { Task } from '../../models/interfaces/dashboard';
import { TaskOrderBy } from '../../models/types/common';

const useOrderTasks = (tasks: Task[]) => {
  const [order, setOrder] = useState<TaskOrderBy>('latestUpdate');

  const handleOrder = (orderBy: TaskOrderBy): Task[] =>
    orderBy === 'latestUpdate'
      ? tasks.sort((a, b) => b.latestUpdate - a.latestUpdate)
      : tasks.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();

        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      });

  const handleOrderChange = (orderBy: TaskOrderBy): void =>
    setOrder(orderBy);

  return { order, handleOrder, handleOrderChange };
}

export default useOrderTasks;