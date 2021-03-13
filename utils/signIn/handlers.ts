import {
  extractFacebookUserImage,
  saveUserFacebookUserImageInLS,
  signInWithProvider,
} from "./signIn";
import { pipe } from "../common";
import { Provider } from "../../models/types/common";
import { Dispatch } from "redux";
import {
  signInAction,
  signInErrorAction,
  signInSuccessAction,
} from "../../redux/ducks/signIn";
import { showNotificationAction } from "../../redux/ducks/ui";
import { NOTIFICATIONS } from "../../services/consts";

export const handleFacebookUserImage = pipe(
  extractFacebookUserImage,
  saveUserFacebookUserImageInLS,
);

export const handleResolvePromise = (res: Promise<any>): Promise<any> =>
  res
    .then(user => {
      if (user.additionalUserInfo.providerId === 'facebook.com')
        handleFacebookUserImage(user);
    })
    .catch(err => err);

export const signIn = pipe(
  signInWithProvider,
  handleResolvePromise,
);

export const handleSignIn = (provider: Provider, push: any) => (dispatch: Dispatch<any>): void => {
  dispatch(signInAction(provider));
  signIn(provider)
    .then(() => {
      dispatch(signInSuccessAction(provider));
      push('/dashboard');
    })
    .catch((err: any) => {
      console.log(err);
      dispatch(signInErrorAction(provider));
      dispatch(showNotificationAction(NOTIFICATIONS().error.network));
    });
}