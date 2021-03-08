import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { RootState } from '../../../models/interfaces/common';
import { Task } from '../../../models/interfaces/dashboard';

const withTaskForm = (Component: React.FC) => (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      taskFormErrors,
      isButtonLoading: { addTask },
      selectedProject: { id },
    },
  } = useSelector((state: RootState) => state);

  const { data, handleOnChange, clearInputs } = useForm<Task>({
    name: '',
    description: '',
    projectId: id,
  });

  Component.displayName = `withTaskForm(${Component.displayName || Component.name})`;

  return (
    <Component
      {...props}
      {... {
        data,
        handleOnChange,
        clearInputs,
        taskFormErrors,
        addTask,
        dispatch,
      }}
    />
  );
}

export default withTaskForm;