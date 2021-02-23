import React from 'react';
import { SearchInput } from '../../common';
import { Container, Span } from '../../ui';
import s from './tasksList.module.scss';

interface Props {
}

const TasksList: React.FC<Props> = (): JSX.Element => {
  return (
    <Container
      className={s.tasksList}
      card='true'
    >
      <Container className={s.tasksList_head}>
        <SearchInput placeholder='Search a task' noStyled='true' />
        <Container className={s.tasksList_badgeContainer}>
          <Span
            badge='true'
            badgeActive='true'
            className={s.tasksList_badge}
          >Lastest</Span>
          <Span badge='true'>A-Z</Span>
        </Container>
      </Container>
      <Container>
        
      </Container>
    </Container>
  );
}

export default TasksList;