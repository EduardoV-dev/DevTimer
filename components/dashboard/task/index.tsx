import React from 'react';
import { Task as TaskInter } from '../../../models/interfaces/dashboard';
import { TaskStatusType } from '../../../models/types/components';
import { getTaskStatusTag } from '../../../utils/dashboard/components';
import { Li, Span } from '../../ui';
import { P } from '../../ui/text/p/p.component';
import s from './task.module.scss';

interface Props {
  type?: TaskStatusType;
  task?: TaskInter;
}

const Task: React.FC<Props> = ({
  task,
}): JSX.Element => {
  const { name, description, lastestUpdate, state } = task;

  return (
    <Li
      className={s.task}
      bgColor={({ theme }) => theme.lightDarken}
      title='Select the task to start working'
    >
      <P
        className={s.task_content}
        bold='true'
      >{name} · <Span
        fontColor={({ theme }) => theme.primary}
      >{lastestUpdate}</Span></P>
      <P className={s.task_content}>{description}</P>
      <Span type={state}>{getTaskStatusTag(state)}</Span>
    </Li>
  );
}

export default Task;