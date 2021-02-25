import React from 'react';
import { PauseIcon } from '../../icons';
import { Button, Container, P, Title } from '../../ui';
import s from './taskTimer.module.scss';

interface Props {

}

const TaskTimer: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container
      bgColor={({ theme }) => theme.lightDarken}
      className={s.taskTimer}>
      <Title uppercase='true'>Timer</Title>
      <P className={s.taskTimer_time}>00:05:30</P>
      <PauseIcon />
      <Button
        type='button'
        primary='true'
        className={s.taskTimer_button}
      >Save time</Button>
    </Container>
  );
}

export default TaskTimer;