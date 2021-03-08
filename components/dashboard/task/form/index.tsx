import React from 'react';
import { Dispatch } from 'redux';
import { Task, TaskFormErrors } from '../../../../models/interfaces/dashboard';
import { OnChange } from '../../../../models/types/events';
import { handleOnSubmit } from '../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../common';
import { withTaskForm } from '../../../hoc';
import { Button, Form } from '../../../ui';

interface Props {
  data: Task,
  handleOnChange: (e: OnChange) => void;
  clearInputs: () => void;
  taskFormErrors: TaskFormErrors;
  addTask: boolean;
  dispatch: Dispatch<any>;
}

const TaskForm: React.FC<Props> = ({
  data,
  handleOnChange,
  clearInputs,
  taskFormErrors,
  addTask,
  dispatch,
}): JSX.Element => {
  const { name, description } = data;

  return (
    <Modal type='task'>
      <Form onSubmit={e => dispatch(handleOnSubmit({
        e,
        data,
        type: 'task',
        clearInputs,
      }))}>
        <FormGroup
          type='input'
          componentType='input'
          labelText='Task name'
          placeholder='Name your task'
          name='name'
          value={name}
          onChange={handleOnChange}
          error={taskFormErrors.name}
          autoFocus
        />
        <FormGroup
          componentType='textarea'
          labelText='Task description'
          placeholder='Add a description that describes your task'
          name='description'
          value={description}
          onChange={handleOnChange}
          error={taskFormErrors.description}
        />
        <Button
          type='submit'
          primary='true'
          disabled={addTask}
          loading={addTask ? 'true' : 'false'}
        >
          Create project
        </Button>
      </Form>
    </Modal>
  );
}

export default withTaskForm(TaskForm);