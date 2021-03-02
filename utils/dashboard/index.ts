import { Dispatch } from "redux";
import { Compose, ProjectErrors, User } from "../../models/interfaces/dashboard";
import { saveProjectErrorsAction } from "../../redux/actions/dashboard";
import { buttonAddProjectLoadingAction, toggleModalAction, uiLoadingAction } from "../../redux/actions/ui";
import { createNewProject } from "../../services/api/dashboard";
import { LS_IMAGE } from "../../services/consts";
import { auth } from "../../services/firebase";
import { trimFields } from "../general";

export const handleSignOut = (push: any, dispatch: Dispatch<any>) =>
  auth().signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
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
  /* if (/^([A-Za-z0-9]+@|http(|s)\:\/\/)([A-Za-z0-9.]+(:\d+)?)(?::|\/)([\d\/\w.-]+?)(\.git)?$/i.test(githubRepositoryLink))
    errors.githubRepositoryLink = 'The repository link is not valid!';*/

  return { errors, credentials: projectData, dispatch };
}

export const addProject = ({ errors, credentials, dispatch }: Compose) => {
  if (JSON.stringify(errors) !== '{}')
    return dispatch(saveProjectErrorsAction(errors));

  dispatch(saveProjectErrorsAction({}));

  console.log(credentials);

  createNewProject(credentials)
    .catch((err: any) => console.log(err))
    .finally(() => {
      dispatch(buttonAddProjectLoadingAction(false));
      dispatch(toggleModalAction(false));
    });
}