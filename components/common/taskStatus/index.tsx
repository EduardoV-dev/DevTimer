import React from 'react';
import { Component } from '../../../models/interfaces/components';
import { TaskStatusType } from '../../../models/types/components';
import { getTaskType } from '../../../utils/dashboard/components';
import { Container, P, Span } from '../../ui';
import s from './taskStatus.module.scss';

interface Props {
  quantity: number;
  type?: TaskStatusType;
}

const TaskStatus: React.FC<Props> = ({
  type,
  quantity,
}): JSX.Element => {
  const task: Component = getTaskType(type);

  return (
    <Container className={s.taskStatus}>
      <Container className={s.taskStatus_data}>
        <task.component className={s.taskStatus_icon} />
        <P bold='true'>{task.text}:</P>
      </Container>
      <Span {...{ type }}>{quantity}</Span>
    </Container>
  );
}

export default TaskStatus;