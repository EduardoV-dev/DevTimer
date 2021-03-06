import React from 'react';
import { Task as TaskInter } from '../../../models/interfaces/dashboard';
import { TaskStatusType } from '../../../models/types/components';
import { getTaskStatusTag } from '../../../utils/dashboard/components';
import { Li, Span } from '../../ui';
import { P } from '../../ui/text/p/p.component';
import { format } from 'timeago.js';
import cn from 'classnames';
import useSelectTask from '../../../hooks/useSelectTask';
import s from './task.module.scss';
import { selectTaskAction } from '../../../redux/ducks/dashboard';

interface Props {
  type?: TaskStatusType;
  task?: TaskInter;
}

const Task: React.FC<Props> = ({
  task,
}): JSX.Element => {
  const { active, dispatch } = useSelectTask(task);

  const classNames = cn(s.task, {
    [s.task_active]: active,
  });

  const { name, description, lastestUpdate, state } = task;

  return (
    <Li
      className={classNames}
      bgColor={({ theme }) => theme.lightDarken}
      title='Select the task to start working'
      onClick={() => dispatch(selectTaskAction(task))}
    >
      <P
        className={s.task_content}
        bold='true'
      >{name} · <Span
        fontColor={({ theme }) => theme.primary}
      >{format(lastestUpdate)}</Span></P>
      <P className={s.task_content}>{description}</P>
      <Span type={state}>{getTaskStatusTag(state)}</Span>
    </Li>
  );
}

export default Task;