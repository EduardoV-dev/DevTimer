import React from 'react';
import { Task } from '..';
import { SearchInput } from '../../common';
import { Container, Span, Ul } from '../../ui';
import s from './tasksList.module.scss';

interface Props {}

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
        <Ul className={s.tasksList_list}>
          <Task type='todo' />
          <Task type='todo' />
          <Task type='progress' />
          <Task type='completed' />
          <Task type='completed' />
        </Ul>
      </Container>
    </Container>
  );
}

export default TasksList;