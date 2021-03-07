import React from 'react';
import { TaskStatus } from '../../../common';
import { Container, Title } from '../../../ui';

interface Props {

}

const ProjectState: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container card='true'>
      <Title fontSize='1.25rem'>Status</Title>
      <TaskStatus type='total' quantity={12} />
      <TaskStatus type='todo' quantity={4} />
      <TaskStatus type='progress' quantity={6} />
      <TaskStatus type='completed' quantity={2} />
    </Container>
  );
}

export default ProjectState;