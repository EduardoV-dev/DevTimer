import React from 'react';
import { Container } from '../../ui';
import { PanelHead, ProjectInfo } from '../../common';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/general';
import { formatDate } from '../../../utils/dashboard';

interface Props {

}

const ProjectData: React.FC<Props> = (props): JSX.Element => {
  const { selectedProject } = useSelector((state: RootState) => state.dashboard);
  const { name, description, createdAt, lastestUpdate, githubRepositoryLink, } = selectedProject;

  return (
    <Container card='true'>
      <PanelHead type='project' name={name} />
      <ProjectInfo 
        title='Description'
        description={description}
      />
      <ProjectInfo 
        title='Created at'
        description={formatDate(createdAt)}
      />
      <ProjectInfo 
        title='Lastest update'
        description={formatDate(lastestUpdate)}
      />
      <ProjectInfo 
        title='Github repository'
        description={githubRepositoryLink}
        link={!description ? 'false' : 'true'}
      />
    </Container>
  );
}

export default ProjectData;