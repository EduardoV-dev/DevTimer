import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { RootState } from '../../../models/interfaces/common';
import { Task } from '../../../models/interfaces/dashboard';
import { handleOnSubmit } from '../../../utils/dashboard/handlers';
import { FormGroup } from '../../common';
import { Container, Form, Title, Button } from '../../ui';
import s from './addTaskForm.module.scss';

interface Props { }

const AddTaskForm: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { 
    selectedProject: { id },  
    isButtonLoading: { addTask },
  } = useSelector((state: RootState) => state.dashboard);

  const { data, handleOnChange, clearInputs } = useForm<Task>({
    name: '',
    description: '',
    projectId: id,
  });

  const { name, description } = data;

  return (
    <Container card='true'>
      <Title fontSize='1.25rem'>New Task</Title>
      <Form 
        onSubmit={e => dispatch(handleOnSubmit({ e, data, type: 'task', clearInputs }))}
        className={s.addTaskForm_form}
      >
        <FormGroup
          labelText='Task name'
          componentType='input'
          type='text'
          placeholder='Name your task'
          name='name'
          onChange={handleOnChange}
          value={name}
        />
        <FormGroup
          labelText='Task description'
          componentType='textarea'
          placeholder='Enter a description for the task'
          name='description'
          onChange={handleOnChange}
          value={description}
        />
        <Button
          type='submit'
          primary='true'
          disabled={addTask}
          loading={addTask ? 'true' : 'false'}
        >Create task</Button>
      </Form>
    </Container>
  );
}

export default AddTaskForm;