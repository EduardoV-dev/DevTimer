import React from 'react';
import { Container, Ul } from '../../../ui';
import { Project } from '../..';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { LoadingIcon } from '../../../icons';
import { NoRegister } from '../../../common';

interface Props {
  className?: string;
}

const ProjectList: React.FC<Props> = ({
  className,
}): JSX.Element => {
  const { projects } = useSelector((state: RootState) => state.dashboard);

  if (!projects) return (
    <Container
      bgColor={({ theme }) => theme.lightDarken}
      {... { className }}
      center='true'
    >
      <LoadingIcon width={32} height={32} fill='#333' />
    </Container>
  );

  return (
    <Container bgColor={({ theme }) => theme.lightDarken} {...{ className }}>
      {projects.length ? (
        <Ul>
          {projects.map(project => (
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