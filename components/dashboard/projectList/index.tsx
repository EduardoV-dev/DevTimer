import React from 'react';
import { Container, P, Span, Ul, Wrapper } from '../../ui';
import { Project } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { LoadingIcon, TodoListIcon } from '../../icons';
import s from './projectList.module.scss';

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
          <Wrapper className={s.projectList_listMessage}>
            <P className={s.projectList_text}>
              You don’t have any project yet.
              <Span>Create a new one to start working.</Span>
            </P>
            <TodoListIcon width={64} height={64} />
          </Wrapper>
        )}
    </Container>
  );
}

export default ProjectList;