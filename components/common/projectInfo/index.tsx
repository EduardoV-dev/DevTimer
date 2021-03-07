import React from 'react';
import { Boolean, TaskStatusType } from '../../../models/types/components';
import { getTaskStatusTag } from '../../../utils/dashboard/components';
import { Container, P, Link, Span } from '../../ui';
import s from './projectInfo.module.scss';

interface Props {
  title: string;
  description: string;
  link?: Boolean;
  type?: TaskStatusType;
}

/* The type prop will handle the color of every task type provided
  By default it's going to be complete because it has a dark color as it should be for all those info that are no a task type
*/

const ProjectInfo: React.FC<Props> = ({
  title,
  description,
  link,
  type = 'total',
}): JSX.Element => {
  return (
    <Container className={s.projectInfo}>
      <P bold='true' className={s.projectInfo_title}>{title}:</P>
      {link === 'true' ? (
        <Link
          href={description}
        >{description}</Link>
      ) : (
        <Span
          bold={type === 'total' ? 'false' : 'true'}
          type={type}
        >{type === 'total' ? description : getTaskStatusTag(type)}</Span>
      )}
    </Container>
  );
}

export default ProjectInfo;