import React from 'react';
import { PanelHead, ProjectInfo } from '../../common';
import { Container } from '../../ui';
import { TaskTimer } from '..';
import s from './taskData.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { formatDate } from '../../../utils/dashboard/common';

interface Props { }

const TaskData: React.FC<Props> = (): JSX.Element => {
  const { selectedTask } = useSelector((state: RootState) => state.dashboard);

  if (!selectedTask) return null;

  const { name, description, createdAt, lastestUpdate, state, time } = selectedTask;

  return (
    <Container className={s.taskData} card='true'>
      <Container
        bgColor={({ theme }) => theme.lightDarken}
        className={s.taskData_data}
      >
        <PanelHead type='task' name={name} />
        <ProjectInfo
          title='Description'
          description={description}
        />
        <ProjectInfo
          title='Created at'
          description={formatDate(createdAt)}
        />
        <ProjectInfo
          title='Lastest update'
          description={formatDate(lastestUpdate)}
        />
        <ProjectInfo
          title='State'
          description={state}
        />
      </Container>
      <Container
        bgColor={({ theme }) => theme.lightDarken}
        className={s.taskData_timer}
      >
        <TaskTimer />
      </Container>
    </Container>
  );
}

export default TaskData;