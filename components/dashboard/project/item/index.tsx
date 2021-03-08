import React from 'react';
import { ChevronIcon } from '../../../icons';
import { Li, P } from '../../../ui';
import { Project as ProjectInter } from '../../../../models/interfaces/dashboard';
import { selectProjectAction } from '../../../../redux/ducks/dashboard';
import useSelectProject from '../../../../hooks/useSelectProject';
import cn from 'classnames';
import s from './item.module.scss';

interface Props {
  project: ProjectInter;
  
}
const Project: React.FC<Props> = ({
  project,
}): JSX.Element => {
  const { active, dispatch } = useSelectProject(project);
  const { name } = project;

  const classNames = cn(s.project, {
    [s.project_active]: active,
  });

  return (  
    <Li className={classNames} onClick={() => dispatch(selectProjectAction(project))}>
      <P>{name}</P>
      <ChevronIcon rotate='true' width={12} height={12} />
    </Li>
  );
}

export default Project;