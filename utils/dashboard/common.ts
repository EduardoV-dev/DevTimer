import { Dispatch } from "redux";
import { Compose, Project, ProjectFormErrors } from "../../models/interfaces/dashboard";
import { RegisterType, SubmitEvent } from "../../models/types/common";
import { createProjectErrorsAction, createProjectSuccessAction, saveProjectFormErrorsAction } from "../../redux/ducks/dashboard";
import { showNotificationAction, toggleModalAction } from "../../redux/ducks/ui";
import { createNewProject } from "../../services/api/dashboard";
import { notificationMessages } from "../../services/consts";

export const preventDefault = ({ e, data }: Compose): Project => {
  e.preventDefault();
  return data;
}

export const trimFields = (type: RegisterType, data: Project): Project => {
  const { name, description, githubRepositoryLink } = data;
  switch (type) {
    case 'project':
      return {
        name: name.trim(),
        description: description.trim(),
        githubRepositoryLink: githubRepositoryLink.trim(),
        uid: data.uid,
      }
    case 'task':
      return { ...data };
    default:
      return;
  }
}

export const checkSubmitData = (type: RegisterType) => (credentials: Project): Compose => {
  const errors: ProjectFormErrors = {};
  const data = trimFields(type, credentials);

  switch (type) {
    case 'project':
      const { name, description, githubRepositoryLink } = data;

      if (name === '')
        errors.name = 'The project name can not be empty!';
      if (description === '')
        errors.description = 'The description can not be empty!';
      break;
    case 'task':
      break;
  }

  return { errors, data, type };
}

export const addRegister = (dispatch: Dispatch<any>) => ({
  errors,
  data,
  type,
}: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch((saveProjectFormErrorsAction(errors)));

  dispatch(saveProjectFormErrorsAction({}));
  const { name } = data;

  const submitEvent = type === 'project' ? createNewProject(data) : null;

  submitEvent
    .then(() => {
      dispatch(showNotificationAction(notificationMessages(name).success[type]));
      dispatch(createProjectSuccessAction()); /* Change when creating a task event */
    })
    .catch(() => {
      dispatch(showNotificationAction(notificationMessages().error[type]));
      dispatch(createProjectErrorsAction()); /* Change when creating a task event */
    })
    .finally(() => dispatch(toggleModalAction(false)));
}