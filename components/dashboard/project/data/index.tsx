import React from 'react';
import { Container } from '../../../ui';
import { Alert, PanelHead, ProjectInfo } from '../../../common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { handleFormatDate } from '../../../../utils/dashboard/handlers';
import { handleModal } from '../../../../utils/ui';
import { toggleProjectAlertAction } from '../../../../redux/ducks/ui';

interface Props { }

const ProjectData: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: { selectedProject },
    ui: {
      isAlertDisplayed: { project },
    },
  } = useSelector((state: RootState) => state);

  if (!selectedProject) return null;

  const {
    name,
    description,
    createdAt,
    latestUpdate,
    githubRepositoryLink,
  } = selectedProject;

  return (
    <>
      <Container card='true'>
        <PanelHead
          type='project'
          name={name}
          editOnClick={() => dispatch(handleModal('project', {
            name: 'edit',
            value: true,
          }))}
          deleteOnClick={() => dispatch(toggleProjectAlertAction(true))}
        />
        <ProjectInfo
          title='Description'
          description={description}
        />
        <ProjectInfo
          title='Created at'
          description={handleFormatDate(createdAt)}
        />
        <ProjectInfo
          title='Latest update'
          description={handleFormatDate(latestUpdate)}
        />
        <ProjectInfo
          title='Github repository'
          description={!githubRepositoryLink ? 'No github link provided' : githubRepositoryLink}
          link={!githubRepositoryLink ? 'false' : 'true'}
        />
      </Container>
      <Alert type='project' state={project} projectId={selectedProject.id}/>
    </>
  );
}

export default ProjectData;