import React from 'react';
import { useDispatch } from 'react-redux';
import { Backdrop } from '..';
import { RegisterType } from '../../../models/types/common';
import { toggleProjectAlertAction, toggleTaskAlertAction } from '../../../redux/ducks/ui';
import { handleDeleteProject, handleDeleteTask } from '../../../utils/dashboard/handlers';
import { Button, Container, P, Span } from '../../ui';
import s from './alert.module.scss';

interface Props {
  state: boolean;
  type: RegisterType;
  taskId?: string;
  projectId?: string;
}

const Alert: React.FC<Props> = ({
  type,
  state,
  taskId,
  projectId,
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      {state && (
        <>
          <Backdrop
            onClick={() => dispatch(
              type === 'project'
                ? toggleProjectAlertAction(false)
                : toggleTaskAlertAction(false))}
          />
          <Container
            bgColor={({ theme }) => theme.lightDarken}
            className={s.alert}
          >
            <Container className={s.alert_head}>
              <P bold='true'>Warning!</P>
              <Span
                fontSize='1.5rem'
                className={s.alert_x}
                onClick={() => dispatch(
                  type === 'project'
                    ? toggleProjectAlertAction(false)
                    : toggleTaskAlertAction(false))}
              >&times;</Span>
            </Container>
            <P>Do you want to delete this {type}?. This action can not be undone!</P>
            <Button
              type='button'
              github='true'
              className={s.alert_button}
              onClick={() => dispatch(
                type === 'project'
                  ? handleDeleteProject(projectId)
                  : handleDeleteTask(taskId, projectId)
              )}
            >
              Delete {type}
            </Button>
          </Container>
        </>
      )}
    </>
  );
}

export default Alert;