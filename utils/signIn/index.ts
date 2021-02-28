import { signInWithFacebook, signInWithGithub } from "../../services/api/signIn";
import { pipe } from "../general";
import { Dispatch } from "redux";
import { Provider } from "../../models/types/signIn";
import { buttonFacebookLoadingAction, buttonGithubLoadingAction } from "../../redux/actions/ui";

const signIn = (provider: Provider): Promise<any> =>
  provider === 'facebook' ? signInWithFacebook() : signInWithGithub();

const saveUserFacebookUserImageInLS = (userImage: string): void =>
  localStorage.setItem(process.env.NEXT_PUBLIC_LS_PICTURE_KEY, userImage);

const extractFacebookUserImage = (user: any) =>
  user.additionalUserInfo.profile.picture.data.url;

export const handleFacebookUserImage = pipe(
  extractFacebookUserImage,
  saveUserFacebookUserImageInLS,
);

const resolvePromise = (promise: Promise<any>): Promise<any> =>
  promise
    .then((user: any) => {
      if (user.additionalUserInfo.providerId === 'facebook.com')
        return handleFacebookUserImage(user)
    })
    .catch(err => console.log(err.message));

export const handleSignIn = pipe(
  signIn,
  resolvePromise,
);

export const handleButtonLoading = (provider: Provider, loadingState: boolean) => (dispatch: Dispatch<any>) =>
  provider === 'facebook'
    ? dispatch(buttonFacebookLoadingAction(loadingState))
    : dispatch(buttonGithubLoadingAction(loadingState));