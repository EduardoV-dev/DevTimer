import React from 'react';
import { FormGroup } from '../../common';
import { Container, Form, Title, Button } from '../../ui';
import s from './newTaskForm.module.scss';

interface Props {

}

const NewTaskForm: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container card='true'>
      <Title fontSize='1.25rem'>New Task</Title>
      <Form className={s.newTaskForm_form}>
        <FormGroup
          labelText='Task name'
          componentType='input'
          type='text'
          placeholder='Name your task'
        />
        <FormGroup
          labelText='Task description'
          componentType='textarea'
          placeholder='Enter a description for the task'
        />
        <Button
          type='submit'
          primary='true'
        >Create task</Button>
      </Form>
    </Container>
  );
}

export default NewTaskForm;