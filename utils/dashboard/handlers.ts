import { Dispatch } from "redux";
import { Compose, User } from "../../models/interfaces/dashboard";
import { cleanProjectsListAction, createProjectAction, createProjectSuccessAction } from "../../redux/ducks/dashboard";
import { uiLoadingAction } from "../../redux/ducks/ui";
import { signOut } from "../../services/api/dashboard";
import { LS_IMAGE } from "../../services/consts";
import { pipe } from "../common";
import { preventDefault, checkSubmitData, addRegister } from './common';

export const handleSignOut = (push: any) => (dispatch: Dispatch<any>) =>
  signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
      dispatch(cleanProjectsListAction());
      push('/');
    })
    .catch((err: any) => console.log(err.message));

export const handleAvatarPictureURL = (user: any): User => ({
  displayName: user.displayName,
  photoURL: (
    user.providerData[0].providerId === 'facebook.com'
      ? localStorage.getItem(LS_IMAGE)
      : user.photoURL
  ),
});

export const handleOnSubmit = ({
  e,
  data,
  type,
  clearInputs,
}: Compose) => (dispatch: Dispatch<any>): void => {
  dispatch(createProjectAction());

  const args: Compose = {
    e,
    data,
    clearInputs,
  }

  pipe(
    preventDefault,
    checkSubmitData(type),
    addRegister(dispatch, clearInputs),
  )(args);
}