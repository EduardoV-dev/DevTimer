import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../../hooks/useForm';
import { RootState } from '../../../../../models/interfaces/common';
import { Task } from '../../../../../models/interfaces/dashboard';
import { handleCreateTask } from '../../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../../common';
import { Button, Form } from '../../../../ui';

interface Props {}

const TaskAddForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {  
    selectedProject,
    taskFormErrors,
    isButtonLoading: {
      task,
    },
  } = useSelector((state: RootState) => state.dashboard);

  if (!selectedProject) return null;

  const { data, handleOnChange, clearInputs } = useForm<Task>({
    name: '',
    description: '',
    projectId: selectedProject.id,
  });

  const { name, description } = data;

  return (
    <Modal type='task' action='add'>
      <Form
        onSubmit={e => dispatch(handleCreateTask({ e, data, clearInputs }))}
      >
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
          disabled={task}
          loading={task ? 'true' : 'false'}
        >
          Create task
        </Button>
      </Form>
    </Modal>
  );
}

export default TaskAddForm;