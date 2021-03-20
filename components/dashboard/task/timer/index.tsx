import React, { useState } from 'react';
import { Time } from '../../../../models/interfaces/dashboard';
import { PauseIcon } from '../../../icons';
import { Button, Container, P, Span, Title } from '../../../ui';
import s from './taskTimer.module.scss';

interface Props { }

const TaskTimer: React.FC<Props> = (): JSX.Element => {
  const [time, setTime] = useState<Time>({
    secs: 0,
    mins: 0,
    hrs: 0,
  });

  const { secs, mins, hrs } = time;
  
  return (
    <Container
      className={s.taskTimer}>
      <Title uppercase='true'>Timer</Title>
      <P className={s.taskTimer_time}>
        <Span fontSize='2rem'>{secs > 9 ? secs : `0${secs}`}&nbsp;:&nbsp;</Span>
        <Span fontSize='2rem'>{mins > 9 ? mins : `0${mins}`}&nbsp;:&nbsp;</Span>
        <Span fontSize='2rem'>{hrs > 9 ? hrs : `0${hrs}`}</Span>
      </P>
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