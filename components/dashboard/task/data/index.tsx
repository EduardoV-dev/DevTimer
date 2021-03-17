import React from 'react';
import { Alert, PanelHead, ProjectInfo } from '../../../common';
import { Container } from '../../../ui';
import { TaskTimer } from '../..';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { handleFormatDate } from '../../../../utils/dashboard/handlers';
import s from './taskData.module.scss';
import { handleModal } from '../../../../utils/ui';
import { toggleTaskAlertAction } from '../../../../redux/ducks/ui';

interface Props { }

const TaskData: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: { 
      selectedTask,
      selectedProject,
    },
    ui: { isAlertDisplayed: { task } },
  } = useSelector((state: RootState) => state);

  if (!selectedTask) return null;

  const { name, description, createdAt, latestUpdate, state, time } = selectedTask;

  return (
    <>
      <Container className={s.taskData} card='true'>
        <Container
          bgColor={({ theme }) => theme.lightDarken}
          className={s.taskData_data}
        >
          <PanelHead
            type='task'
            name={name}
            editOnClick={() => dispatch(handleModal('task', { name: 'edit', value: true }))}
            deleteOnClick={() => dispatch(toggleTaskAlertAction(true))}
          />
          <ProjectInfo
            title='Description'
            description={description}
          />
          <ProjectInfo
            title='Created at'
            description={handleFormatDate(createdAt)}
          />
          <ProjectInfo
            title='Latest update'
            description={handleFormatDate(latestUpdate)}
          />
          <ProjectInfo
            title='State'
            description={state}
            type={state}
          />
        </Container>
        <Container
          bgColor={({ theme }) => theme.lightDarken}
          className={s.taskData_timer}
        >
          <TaskTimer />
        </Container>
      </Container>
      <Alert type='task' state={task} taskId={selectedTask.id}  projectId={selectedProject.id} />
    </>
  );
}

export default TaskData;