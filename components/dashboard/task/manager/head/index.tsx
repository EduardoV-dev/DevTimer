import React from 'react';
import { useDispatch } from 'react-redux';
import { OnChange } from '../../../../../models/types/events';
import { handleModal } from '../../../../../utils/ui';
import { SearchInput } from '../../../../common';
import { Button, Container, Span } from '../../../../ui';
import s from './taskManagerHead.module.scss';

interface Props { 
  onChange: (e: OnChange) => void;
}

const TasksManagerHead: React.FC<Props> = ({
  onChange,
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SearchInput 
        placeholder='Search a task' 
        noStyled='true' 
        onChange={onChange}
      />
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
          onClick={() => dispatch(handleModal('task', { 
            name: 'add',
            value: true,
          }))}
        >
          New task
      </Button>
      </Container>
    </Container>
  );
}

export default TasksManagerHead;