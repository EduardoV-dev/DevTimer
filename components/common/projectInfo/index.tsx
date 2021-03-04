import React from 'react';
import { Boolean } from '../../../models/types/components';
import { Container, P, Link } from '../../ui';
import s from './projectInfo.module.scss';

interface Props {
  title: string;
  description: string;
  link?: Boolean;
}

const ProjectInfo: React.FC<Props> = ({
  title,
  description,
  link,
}): JSX.Element => {
  return (  
    <Container className={s.projectInfo}>
      <P bold='true' className={s.projectInfo_title}>{title}:</P>
      {link ? (
        <Link
          href={description}
        >{description}</Link>
      ) : (
        <P>{!description ? 'No github link provided' : description}</P>
      )}
    </Container>
  );
}

export default ProjectInfo;