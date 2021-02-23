import React from 'react';
import { TaskStatus } from '../../common';
import { Container, Title } from '../../ui';
import { Pie } from 'react-chartjs-2';
import s from './projectState.module.scss';

interface Props {

}

const ProjectState: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container
      className={s.projectState}
      card='true'
    >
      <Container className={s.projectState_statusContainer}>
        <Title fontSize='1.25rem'>Status</Title>
        <TaskStatus type='total' quantity={12} />
        <TaskStatus type='todo' quantity={4} />
        <TaskStatus type='progress' quantity={6} />
        <TaskStatus type='completed' quantity={2} />
      </Container>
      <Container>
        <Pie
          data={{
            labels: ['To do', 'In progress', 'Completed'],
            datasets: [
              {
                label: 'Project state',
                data: [4, 6, 2],
                backgroundColor: [
                  '#C7D431',
                  '#3C589F',
                  '#2FB48C',
                ]
              }
            ]
          }}
        />
      </Container>
    </Container>
  );
}

export default ProjectState;