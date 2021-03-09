import React from 'react';
import { Container } from '../../../ui';
import { PanelHead, ProjectInfo } from '../../../common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { formatDate } from '../../../../utils/dashboard/common';
import { handleModal } from '../../../../utils/ui';

interface Props { }

const ProjectData: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state: RootState) => state.dashboard);
  const {
    name,
    description,
    createdAt,
    lastestUpdate,
    githubRepositoryLink,
  } = selectedProject;

  return (
    <Container card='true'>
      <PanelHead
        type='project'
        name={name}
        editOnClick={() => dispatch(handleModal('project', {
          name: 'edit',
          value: true,
        }))}
      />
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
        description={!githubRepositoryLink ? 'No github link provided' : githubRepositoryLink}
        link={!githubRepositoryLink ? 'false' : 'true'}
      />
    </Container>
  );
}

export default ProjectData;