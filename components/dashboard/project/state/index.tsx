import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { handleTasksInState } from '../../../../utils/dashboard/handlers';
import { TaskStatus } from '../../../common';
import { Container, Title } from '../../../ui';

interface Props { }

const ProjectState: React.FC<Props> = (): JSX.Element => {
  const { tasks } = useSelector((state: RootState) => state.dashboard);
  const { total, todo, progress, completed } = handleTasksInState(tasks);

  return (
    <Container card='true'>
      <Title fontSize='1.25rem'>Status</Title>
      <TaskStatus type='total' quantity={total} />
      <TaskStatus type='todo' quantity={todo} />
      <TaskStatus type='progress' quantity={progress} />
      <TaskStatus type='completed' quantity={completed} />
    </Container>
  );
}

export default ProjectState;