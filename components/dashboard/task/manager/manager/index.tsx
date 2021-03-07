import React from 'react';
import { TaskList, TaskManagerHead } from '../../..';
import { Container } from '../../../../ui';

interface Props {

}

const TasksManager: React.FC<Props> = (): JSX.Element => {
  return (  
    <Container card='true'>
      <TaskManagerHead />
      <TaskList />
    </Container>
  );
}

export default TasksManager;