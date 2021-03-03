import React from 'react';
import { Boolean } from '../../../models/types/components';
import { ChevronIcon } from '../../icons';
import { Li, P } from '../../ui';
import s from './project.module.scss';
import cn from 'classnames';

interface Props {
  active?: Boolean;
  projectName: string;
}

const Project: React.FC<Props> = ({
  active,
  projectName,
}): JSX.Element => {
  const classNames = cn(s.project, {
    [s.project_active]: active,
  })

  return (  
    <Li className={classNames}>
      <P>{projectName}</P>
      <ChevronIcon rotate='true' width={12} height={12} />
    </Li>
  );
}

export default Project;