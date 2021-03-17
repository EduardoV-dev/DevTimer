import { Dispatch } from "redux";
import {
  Compose,
  Project,
  ProjectFormErrors,
  Task,
  TaskFormErrors,
} from "../../models/interfaces/dashboard";
import { RegisterType } from "../../models/types/common";
import { TaskStatusType } from "../../models/types/components";
import {
  saveProjectFormErrorsAction,
  saveTaskFormErrorsAction,
} from "../../redux/ducks/dashboard";
import { createNewProject, createNewTask, editExistingProject, editExistingTask } from "../../services/api/dashboard";
import { handleCreateProjectResponse, handleCreateTaskResponse, handleEditProjectResponse, handleEditTaskResponse } from './handlers';

export const preventDefault = ({ e, data }: Compose): Project | Task => {
  e.preventDefault();
  return data;
}

const trimProjectFields = (project: Project): Project => ({
  ...project,
  name: project.name.trim(),
  description: project.description.trim(),
  githubRepositoryLink: project.githubRepositoryLink.trim(),
});

const trimTaskFields = (task: Task): Task => ({
  ...task,
  name: task.name.trim(),
  description: task.description.trim(),
});

export const trimFields = (type: RegisterType, credentials: Project & Task): Project | Task =>
  type === 'project' ? trimProjectFields(credentials) : trimTaskFields(credentials);

const checkProjectData = (project: Project): ProjectFormErrors => {
  const errors: ProjectFormErrors = {};
  const { name, description, githubRepositoryLink } = project;

  if (name === '')
    errors.name = 'The project name can not be empty!';
  if (description === '')
    errors.description = 'The project description can not be empty!';

  return errors;
}

const checkTaskData = (task: Task): TaskFormErrors => {
  const errors: TaskFormErrors = {};
  const { name, description } = task;

  if (name === '')
    errors.name = 'The task name can not be empty!';
  if (description === '')
    errors.description = 'The task description can not be empty!';

  return errors;
}

export const checkSubmitData = (type: RegisterType) => (credentials: Project & Task): Compose => {
  const data = trimFields(type, credentials);
  const errors = type === 'project' ? checkProjectData(data) : checkTaskData(data);
  return { errors, data, };
}

export const getTaskCount = (tasks: Task[], type: TaskStatusType): number =>
  (tasks.filter(task => task.state === type)).length;

export const createProject = (dispatch: Dispatch<any>, clearInputs: VoidFunction) => ({
  errors,
  data,
}: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch(saveProjectFormErrorsAction(errors));

  dispatch(saveProjectFormErrorsAction({}));
  const { name } = data;
  dispatch(handleCreateProjectResponse(createNewProject(data), name, clearInputs));
}

export const createTask = (dispatch: Dispatch<any>, clearInputs: VoidFunction) => ({
  errors,
  data,
}: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch((saveTaskFormErrorsAction(errors)));

  dispatch((saveTaskFormErrorsAction({})));
  const { name } = data;
  dispatch(handleCreateTaskResponse(createNewTask(data), name, clearInputs));
}

export const editProject = (dispatch: Dispatch<any>, clearInputs: VoidFunction) => ({
  errors,
  data,
}: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch(saveProjectFormErrorsAction(errors));

  dispatch(saveProjectFormErrorsAction({}));
  dispatch(handleEditProjectResponse(editExistingProject(data), data, clearInputs));
}

export const editTask = (dispatch: Dispatch<any>, clearInputs: VoidFunction) => ({
  errors,
  data,
}: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch(saveTaskFormErrorsAction(errors));

  dispatch(saveTaskFormErrorsAction({}));
  dispatch(handleEditTaskResponse(editExistingTask(data), data, clearInputs));
}