import { signInWithFacebook, signInWithGithub } from "../../services/api/signIn";
import { Provider } from "../../models/types/common";
import { LS_IMAGE } from "../../services/consts";

export const signInWithProvider = (provider: Provider): Promise<any> =>
  provider === 'facebook' ? signInWithFacebook() : signInWithGithub();

export const saveUserFacebookUserImageInLS = (userImage: string): void =>
  localStorage.setItem(LS_IMAGE, userImage);

export const extractFacebookUserImage = (user: any) =>
  user.additionalUserInfo.profile.picture.data.url;

