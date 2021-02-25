import React from 'react';
import { Container } from '../../ui';
import { PanelHead, ProjectInfo } from '../../common';
import s from './projectData.module.scss';

interface Props {

}

const ProjectData: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container
      className={s.projectData}
      card='true'
    >
      <PanelHead type='project' />
      <ProjectInfo 
        title='Description'
        description='Project description here lorem ipsum dolor sit ame asu madre'
      />
      <ProjectInfo 
        title='Created at'
        description='March 13rd 2021, 09:32am'
      />
      <ProjectInfo 
        title='Lastest update'
        description='March 13rd 2021, 09:32am'
      />
      <ProjectInfo 
        title='Github repository'
        description='https://github.com/EduardoV-dev/Image-Finder'
        link='true'
      />
    </Container>
  );
}

export default ProjectData;