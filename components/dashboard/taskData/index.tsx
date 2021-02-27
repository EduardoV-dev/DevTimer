import React from 'react';
import { PanelHead, ProjectInfo } from '../../common';
import { Container } from '../../ui';
import { TaskTimer } from '..';
import s from './taskData.module.scss';

interface Props {

}

const TaskData: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container className={s.taskData} card='true'>
      <Container className={s.taskData_data}>
        <PanelHead type='task' />
        <ProjectInfo
          title='Description'
          description='Project description here lorem ipsum dolor sit ame asu madre'
        />
        <ProjectInfo
          title='Created at'
          description='March 13rd 2021, 09:32am'
        />
        <ProjectInfo
          title='Lastest update'
          description='March 13rd 2021, 09:32am'
        />
        <ProjectInfo
          title='Github repository'
          description='https://github.com/EduardoV-dev/Image-Finder'
          link='true'
        />
      </Container>
      <Container className={s.taskData_timer}>
        <TaskTimer />
      </Container>
    </Container>
  );
}

export default TaskData;