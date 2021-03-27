import { Dispatch } from 'redux';
import { saveUserAction } from '../../../redux/ducks/signIn';
import { uiLoadingAction } from '../../../redux/ducks/ui';
import { auth } from '../../firebase';

export const signInWithFacebook = () => {
  const facebookProvider = new auth.FacebookAuthProvider();
  return auth().setPersistence(auth.Auth.Persistence.SESSION)
    .then(() => auth().signInWithPopup(facebookProvider));
}

export const signInWithGithub = () => {
  const githubProvider = new auth.GithubAuthProvider();
  return auth().setPersistence(auth.Auth.Persistence.SESSION)
    .then(() => auth().signInWithPopup(githubProvider));
}

export const handleUserAuthChange = () => (dispatch: Dispatch<any>) => {
  auth().onAuthStateChanged(user => {
    dispatch(saveUserAction(user));
    dispatch(uiLoadingAction(false));
  });
}