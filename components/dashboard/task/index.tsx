import React from 'react';
import { TaskStatusType } from '../../../models/types/components';
import { getTaskStatusTag } from '../../../utils/dashboard/components';
import { Li, Span } from '../../ui';
import { P } from '../../ui/text/p/p.component';
import s from './task.module.scss';

interface Props {
  type?: TaskStatusType;
}

const Task: React.FC<Props> = ({
  type,
}): JSX.Element => {
  return (
    <Li
      className={s.task}
      bgColor={({ theme }) => theme.lightDarken}
      title='Select the task to start working'
    >
      <P 
        className={s.task_content}
        bold='true'
      >Create layout · <Span>3 days ago</Span></P>
      <P
        className={s.task_content}
      >Create a new layout for all the components of the project</P>
      <Span {...{ type }}>{getTaskStatusTag(type)}</Span>
    </Li>
  );
}

export default Task;