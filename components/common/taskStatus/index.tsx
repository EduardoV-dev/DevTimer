import React from 'react';
import { TaskStatus as TaskStat } from '../../../models/interfaces/components';
import { TaskStatusType } from '../../../models/types/components';
import { getTaskType } from '../../../utils/components/taskStatus';
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
  const task: TaskStat = getTaskType(type);
  const { text } = task;

  return (
    <Container className={s.taskStatus}>
      <Container className={s.taskStatus_data}>
        <task.icon className={s.taskStatus_icon} />
        <P bold='true'>{text}:</P>
      </Container>
      <Span {...{ type }}>{quantity}</Span>
    </Container>
  );
}

export default TaskStatus;