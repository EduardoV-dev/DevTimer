import React, { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TaskOrderBy } from '../../../../../models/types/common';
import { OnChange } from '../../../../../models/types/events';
import { handleModal } from '../../../../../utils/ui';
import { SearchInput } from '../../../../common';
import { Button, Container, Span } from '../../../../ui';
import s from './taskManagerHead.module.scss';

interface Props {
  onChange: (e: OnChange) => void;
  setOrderBy: React.Dispatch<SetStateAction<TaskOrderBy>>;
}

const TasksManagerHead: React.FC<Props> = ({
  onChange,
  setOrderBy,
}): JSX.Element => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<any>({
    latest: true,
    alphabetic: false,
  });

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
            className={s.taskManagerHead_badge}
            badge='true'
            badgeActive={active.latest}
            onClick={() => {
              setOrderBy('latestUpdate');
              setActive({
                latest: true,
                alphabetic: false,
              });
            }}
            >Lastest</Span>
          <Span
            badge='true'
            badgeActive={active.alphabetic}
            onClick={() => {
              setOrderBy('name')
              setActive({
                latest: false,
                alphabetic: true,
              });
            }}
          >A-Z</Span>
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