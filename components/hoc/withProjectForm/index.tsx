import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { RootState } from '../../../models/interfaces/common';
import { Project } from '../../../models/interfaces/dashboard';

const withProjectForm = (Component: React.FC) => (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      projectFormErrors,
      isButtonLoading: { addProject },
    },
    signIn: { user: { uid } },
  } = useSelector((state: RootState) => state);

  console.log(`userId: ${uid}`);

  const { data, handleOnChange, clearInputs } = useForm<Project>({
    name: '',
    description: '',
    githubRepositoryLink: '',
    uid,
  });

  Component.displayName = `withProjectForm(${Component.displayName || Component.name})`;

  return (
    <Component
      {...props}
      {... {
        data,
        handleOnChange,
        clearInputs,
        projectFormErrors,
        addProject,
        dispatch,
      }}
    />
  );
}

export default withProjectForm;