import { auth } from '../../firebase';

export const signInWithFacebook = () => {
  const facebookProvider = new auth.FacebookAuthProvider();
  return auth().signInWithPopup(facebookProvider);
}

export const signInWithGithub = () => {
  const githubProvider = new auth.GithubAuthProvider();
  return auth().signInWithPopup(githubProvider);
}