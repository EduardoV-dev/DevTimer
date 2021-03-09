import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from '../../../hooks/useForm';
import { RootState } from '../../../models/interfaces/common';
import { Project } from '../../../models/interfaces/dashboard';
import { FormAction } from '../../../models/types/common';

const withProjectForm = (Component: React.FC) => (props: any): JSX.Element => {
  const [formAction, setFormAction] = useState<FormAction>(null);

  const dispatch = useDispatch();
  const {
    dashboard: {
      projectFormErrors,
      isButtonLoading: { addProject },
      selectedProject,
    },
    signIn: { user: { uid } },
    ui: {
      isModalDisplayed: {
        project: {
          add,
          edit,
        }
      }
    }
  } = useSelector((state: RootState) => state);

  const { data, handleOnChange, clearInputs, setData } = useForm<Project>({
    name: '',
    description: '',
    githubRepositoryLink: '',
    uid,
  });

  useEffect(() => {
    if (!add && !edit) return setFormAction(null);
    if (edit) {
      setFormAction('edit');
      return setData({ ...selectedProject });
    }

    setFormAction('add');
    return setData({});
  }, [add, edit]);

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
        formAction,
      }}
    />
  );
}

export default withProjectForm;