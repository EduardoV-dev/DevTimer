import React from 'react';
import { Container } from '../../ui';
import { PanelHead } from '../index';
import s from './projectData.module.scss';

interface Props {

}

const ProjectData: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container
      bgColor={({ theme }) => theme.light}
      className={s.projectData}
    >
      <PanelHead />
    </Container>
  );
}

export default ProjectData;