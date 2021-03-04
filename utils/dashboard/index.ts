import { Dispatch } from "redux";
import { Compose, ProjectErrors, User } from "../../models/interfaces/dashboard";
import { saveProjectErrorsAction, saveProjectsAction } from "../../redux/actions/dashboard";
import { showNotificationAction, toggleModalAction, uiLoadingAction } from "../../redux/actions/ui";
import { createNewProject, signOut } from "../../services/api/dashboard";
import { LS_IMAGE } from "../../services/consts";
import { handleButtonLoading, trimFields } from "../general";

export const handleSignOut = (push: any, dispatch: Dispatch<any>) =>
  signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
      dispatch(saveProjectsAction(null));
      push('/');
    })
    .catch((err: any) => console.log(err.message));

export const getAvatarPictureURL = (user: any): User => ({
  displayName: user.displayName,
  photoURL: (
    user.providerData[0].providerId === 'facebook.com'
      ? localStorage.getItem(LS_IMAGE)
      : user.photoURL
  ),
});

export const checkProjectData = ({ credentials, dispatch }: Compose): Compose => {
  const errors: ProjectErrors = {};
  const projectData = trimFields('project', credentials);
  const { name, description, githubRepositoryLink } = projectData;

  if (name === '')
    errors.name = 'The project name can not be empty!';
  if (description === '')
    errors.description = 'The description can not be empty!';

  return { errors, credentials: projectData, dispatch };
}

export const addProject = ({ errors, credentials, dispatch }: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch(saveProjectErrorsAction(errors));

  dispatch(saveProjectErrorsAction({}));

  createNewProject(credentials)
    .then(() =>
      dispatch(showNotificationAction({
        type: 'success',
        title: 'New project created!',
        message: 'The project DevTimer was created successfully',
      })))
    .catch(err => dispatch(showNotificationAction({
      type: 'error',
      title: 'Error',
      message: err.message,
    })))
    .finally(() => {
      handleButtonLoading('addProject', false, dispatch);
      dispatch(toggleModalAction(false));
    });
}

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