import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../../../hooks/useForm';
import { RootState } from '../../../../../models/interfaces/common';
import { Task } from '../../../../../models/interfaces/dashboard';
import { handleEditTask } from '../../../../../utils/dashboard/handlers';
import { FormGroup, Modal } from '../../../../common';
import { Button, Form } from '../../../../ui';

interface Props { }

const TaskEditForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      selectedProject,
      selectedTask,
      taskFormErrors,
      isButtonLoading: { task },
    },
    ui: {
      isModalDisplayed: {
        task: { edit },
      }
    }
  } = useSelector((state: RootState) => state);

  if (!selectedTask || !selectedProject) return null;

  const { data, handleOnChange, clearInputs, setData } = useForm<Task>({
    name: '',
    description: '',
    projectId: selectedProject.id,
    state: selectedTask.state,
  });

  const { name, description, state } = data;

  useEffect(() => edit && setData({ ...selectedTask }), [edit]);

  return (
    <Modal type='task' action='edit'>
      <Form
        onSubmit={e => dispatch(handleEditTask({ e, data, clearInputs }))}
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
        <FormGroup
          componentType='select'
          labelText='Task state'
          name='state'
          onChange={handleOnChange}
          value={state}
        >
          <option value='todo'>To do</option>
          <option value='progress'>In progress</option>
          <option value='completed'>Completed</option>
        </FormGroup>
        <Button
          type='submit'
          primary='true'
          disabled={task}
          loading={task ? 'true' : 'false'}
        >
          Edit task
        </Button>
      </Form>
    </Modal>
  );
}

export default TaskEditForm;