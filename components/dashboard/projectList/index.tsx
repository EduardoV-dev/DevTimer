import React from 'react';
import { Container, Ul } from '../../ui';
import { Project } from '..';

interface Props {
  className?: string;
}

const ProjectList: React.FC<Props> = ({
  className,
}): JSX.Element => {
  return (
    <Container bgColor={({ theme }) => theme.lightDarken} {...{ className }}>
      <Ul>
        <Project active='true' />
        <Project />
        <Project />
        <Project />
      </Ul>
    </Container>
  );
}

export default ProjectList;