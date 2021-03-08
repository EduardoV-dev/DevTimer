import { Action, Dispatch } from "redux";
import {
  Compose,
  Project,
  ProjectFormErrors,
  Task,
  TaskFormErrors,
} from "../../models/interfaces/dashboard";
import { RegisterType } from "../../models/types/common";
import {
  createProjectErrorAction,
  createProjectSuccessAction,
  createTaskErrorAction,
  createTaskSuccessAction,
  saveProjectFormErrorsAction,
  saveTaskFormErrorsAction,
} from "../../redux/ducks/dashboard";
import { showNotificationAction, toggleProjectModalAction, toggleTaskModalAction } from "../../redux/ducks/ui";
import { createNewProject, createNewTask } from "../../services/api/dashboard";
import { notificationMessages } from "../../services/consts";

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const format = Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  return format.format(date);
}

export const preventDefault = ({ e, data }: Compose): Project | Task => {
  e.preventDefault();
  return data;
}

const trimProjectFields = (project: Project): Project => ({
  name: project.name.trim(),
  description: project.description.trim(),
  githubRepositoryLink: project.githubRepositoryLink.trim(),
  uid: project.uid,
});

const trimTaskFields = (task: Task): Task => ({
  name: task.name.trim(),
  description: task.description.trim(),
  projectId: task.projectId,
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
  return { errors, data, type };
}

const dispatchProjectFormErrors = (errors: ProjectFormErrors) => (dispatch: Dispatch<any>): Action => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch((saveProjectFormErrorsAction(errors)));

  return dispatch((saveProjectFormErrorsAction({})));
}

const dispatchTaskFormErrors = (errors: TaskFormErrors) => (dispatch: Dispatch<any>): Action => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch((saveTaskFormErrorsAction(errors)));

  return dispatch((saveTaskFormErrorsAction({})));
}

export const manageFormErrors = (errors: ProjectFormErrors | TaskFormErrors, type: RegisterType) => (dispatch: Dispatch<any>) =>
  type === 'project' ? dispatch(dispatchProjectFormErrors(errors)) : dispatch(dispatchTaskFormErrors(errors));

export const addRegister = (dispatch: Dispatch<any>, clearInputs: () => void) => ({
  errors,
  data,
  type,
}: Compose) => {
  manageFormErrors(errors, type);
  const { name } = data;

  const submitEvent = type === 'project' ? createNewProject(data) : createNewTask(data);

  submitEvent
    .then(() => {
      dispatch(showNotificationAction(notificationMessages(name).success[type]));
      type === 'project' ? dispatch(createProjectSuccessAction()) : dispatch(createTaskSuccessAction());
      clearInputs();
    })
    .catch((err) => {
      console.log(err);
      dispatch(showNotificationAction(notificationMessages().error[type]));
      type === 'project' ? dispatch(createProjectErrorAction()) : dispatch(createTaskErrorAction());
    })
    .finally(() => type === 'project' ? dispatch(toggleProjectModalAction(false)) : dispatch(toggleTaskModalAction(false)));
}