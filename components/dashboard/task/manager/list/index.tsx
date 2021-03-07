import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '../../..';
import { RootState } from '../../../../../models/interfaces/common';
import { getTasksById } from '../../../../../services/api/dashboard';
import { NoRegister } from '../../../../common';
import { Container, Ul } from '../../../../ui';
import s from './taskList.module.scss';

interface Props { }

const TasksList: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    selectedProject: { id },
    tasks,
  } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => { dispatch(getTasksById(id)) }, [id]);

  if (!tasks) return null;

  return (
    <Container>
      {tasks.length ? (
        <Ul className={s.taskList_list}>
          {tasks.map(task => (
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