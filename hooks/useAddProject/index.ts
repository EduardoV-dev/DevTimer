import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddProject, Compose, Project } from '../../models/interfaces/dashboard';
import { OnChange } from '../../models/types/events';
import { addProject, checkProjectData } from '../../utils/dashboard';
import { handleButtonLoading, pipe, preventDefault } from '../../utils/general';

const useAddProject = (initialState: Project): AddProject => {
  const [projectData, setProjectData] = useState<Project>(initialState);
  const dispatch = useDispatch();

  const handleOnChange = ({ target }: OnChange) =>
    setProjectData({ ...projectData, [target.name]: target.value });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    handleButtonLoading('addProject', true, dispatch);

    const args: Compose = {
      e,
      credentials: projectData,
      dispatch,
    }

    pipe(
      preventDefault,
      checkProjectData,
      addProject,
    )(args);
  }

  return { projectData, handleOnChange, handleOnSubmit };
}

export default useAddProject;