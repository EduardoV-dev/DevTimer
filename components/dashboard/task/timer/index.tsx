import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { Backdrop } from '../../../common';
import { PauseIcon, PlayIcon } from '../../../icons';
import { Button, Container, P, Span, Title } from '../../../ui';
import useTimer from '../../../../hooks/useTimer';
import s from './taskTimer.module.scss';

interface Props { }

const TaskTimer: React.FC<Props> = (): JSX.Element => {
  const { isTiming } = useSelector((state: RootState) => state.dashboard);
  const { timeValues, loading, start, pause, handleOnClick } = useTimer();
  const { secs, mins, hrs } = timeValues;

  return (
    <>
      <Container
        className={s.taskTimer}>
        <Title uppercase='true'>Timer</Title>
        <P className={s.taskTimer_time}>
          <Span fontSize='2rem'>{hrs > 9 ? hrs : `0${hrs}`}&nbsp;:&nbsp;</Span>
          <Span fontSize='2rem'>{mins > 9 ? mins : `0${mins}`}&nbsp;:&nbsp;</Span>
          <Span fontSize='2rem'>{secs > 9 ? secs : `0${secs}`}</Span>
        </P>
        {!isTiming
          ? <PlayIcon onClick={start} />
          : <PauseIcon onClick={pause} className={s.taskTimer_control} />
        }
        {isTiming !== null && !isTiming && (
          <Button
            type='button'
            primary='true'
            className={s.taskTimer_button}
            disabled={loading}
            loading={loading ? 'true' : 'false'}
            onClick={handleOnClick}
          >Save time</Button>
        )}
      </Container>
      {isTiming && (
        <Backdrop className={s.taskTimer_backdrop} />
      )}
    </>
  );
}

export default TaskTimer;