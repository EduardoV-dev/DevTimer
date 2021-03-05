import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Task } from '..';
import { RootState } from '../../../models/interfaces/common';
import { getTasksById } from '../../../services/api/dashboard';
import { SearchInput } from '../../common';
import { Container, Span, Ul } from '../../ui';
import s from './tasksList.module.scss';

interface Props { }

const TasksList: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    selectedProject: { id },
    tasks,
  } = useSelector((state: RootState) => state.dashboard);

  useEffect(() => { dispatch(getTasksById(id)) }, []);

  return (
    <Container card='true'>
      <Container className={s.tasksList_head}>
        <SearchInput placeholder='Search a task' noStyled='true' />
        <Container className={s.tasksList_badgeContainer}>
          <Span
            badge='true'
            badgeActive='true'
            className={s.tasksList_badge}
          >Lastest</Span>
          <Span badge='true'>A-Z</Span>
        </Container>
      </Container>
      <Container>
        <Ul className={s.tasksList_list}>
          {tasks && (
            tasks.map(task => (
              <Task
                key={task.id}
                task={task}
              />
            ))
          )}
          {/* <Task type='todo' />
          <Task type='todo' />
          <Task type='progress' />
          <Task type='completed' />
          <Task type='completed' /> */}
        </Ul>
      </Container>
    </Container>
  );
}

export default TasksList;