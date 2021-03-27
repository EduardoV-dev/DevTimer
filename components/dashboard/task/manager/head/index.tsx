import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../../../../../models/interfaces/dashboard';
import { TaskOrderBy } from '../../../../../models/types/common';
import { OnChange } from '../../../../../models/types/events';
import { handleModal } from '../../../../../utils/ui';
import { SearchInput } from '../../../../common';
import { Button, Container, Span } from '../../../../ui';
import s from './taskManagerHead.module.scss';

interface Props {
  tasks: Task[];
  order: TaskOrderBy;
  onChange: (e: OnChange) => void;
  handleOrderChange: (orderBy: TaskOrderBy) => void;
}

const TasksManagerHead: React.FC<Props> = ({
  order,
  onChange,
  handleOrderChange,
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <Container>
      <SearchInput
        placeholder='Search a task'
        noStyled='true'
        {... { onChange }}
      />
      <Container className={s.taskManagerHead_controlsContainer}>
        <Container>
          <Span
            className={s.taskManagerHead_badge}
            badge='true'
            badgeActive={order === 'latestUpdate' ? 'true' : 'false'}
            onClick={() => handleOrderChange('latestUpdate')}
          >Latest</Span>
          <Span
            badge='true'
            badgeActive={order === 'name' ? 'true' : 'false'}
            onClick={() => handleOrderChange('name')}
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