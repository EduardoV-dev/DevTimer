import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../../..';
import { RootState } from '../../../../../models/interfaces/common';
import { Task as TaskInter } from '../../../../../models/interfaces/dashboard';
import { NoRegister } from '../../../../common';
import { Container, Ul } from '../../../../ui';
import s from './taskList.module.scss';

interface Props {
  className?: string;
  filteredTasks?: TaskInter[];
}

const TasksList: React.FC<Props> = ({
  filteredTasks,
}): JSX.Element => {
  const { tasks } = useSelector((state: RootState) => state.dashboard);

  return (
    <Container>
      {tasks.length ? (
        <Ul className={s.taskList_list}>
          {filteredTasks.map(task => (
            <Task
              key={task.id}
              task={task}
            />
          ))}
        </Ul>
      ) : (
        <NoRegister
          pText='No tasks where found in this project'
          spanText='Create new tasks to start working!'
        />
      )}
    </Container>
  );
}

export default TasksList;