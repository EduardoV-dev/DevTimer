import React, { useEffect } from 'react';
import { Container, Ul } from '../../../ui';
import { Project } from '../..';
import { LoadingIcon } from '../../../icons';
import { NoRegister } from '../../../common';
import { Project as ProjectInter } from '../../../../models/interfaces/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { selectTaskAction } from '../../../../redux/ducks/dashboard';

interface Props {
  className?: string;
  filteredProjects: ProjectInter[];
}

const ProjectList: React.FC<Props> = ({
  className,
  filteredProjects,
}): JSX.Element => {
  const dispatch = useDispatch();
  const {
    projects,
    selectedProject,
  } = useSelector((state: RootState) => state.dashboard);

  if (!projects) return (
    <Container
      bgColor={({ theme }) => theme.lightDarken}
      {... { className }}
      center='true'
    >
      <LoadingIcon width={32} height={32} fill='#333' />
    </Container>
  );

  useEffect(() => { dispatch(selectTaskAction(null)) }, [selectedProject]);

  return (
    <Container bgColor={({ theme }) => theme.lightDarken} {...{ className }}>
      {projects.length ? (
        <Ul>
          {filteredProjects.map(project => (
            <Project
              key={project.id}
              project={project}
            />
          ))}
        </Ul>
      ) : (
        <NoRegister
          pText='You don’t have any project yet.'
          spanText='Create a new one to start working'
        />
      )}
    </Container>
  );
}

export default ProjectList;