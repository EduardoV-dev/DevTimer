import React from 'react';
import { SearchInput } from '../../../../common';
import { Button, Container, Span } from '../../../../ui';
import s from './taskManagerHead.module.scss';

interface Props { }

const TasksManagerHead: React.FC<Props> = (): JSX.Element => {
  return (
    <Container>
      <SearchInput placeholder='Search a task' noStyled='true' />
      <Container className={s.taskManagerHead_controlsContainer}>
        <Container>
          <Span
            badge='true'
            badgeActive='true'
            className={s.taskManagerHead_badge}
          >Lastest</Span>
          <Span badge='true'>A-Z</Span>
        </Container>
        <Button
          type='button'
          facebook='true'
        >
          New task
      </Button>
      </Container>
    </Container>
  );
}

export default TasksManagerHead;