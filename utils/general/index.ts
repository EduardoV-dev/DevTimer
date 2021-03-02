import { Dispatch } from "redux";
import { Compose, Project } from "../../models/interfaces/dashboard";
import { TrimType } from "../../models/types/general";
import { saveUserAction } from "../../redux/actions/auth";
import { uiLoadingAction } from "../../redux/actions/ui";
import { auth } from "../../services/firebase";

type Pipe = any[];
type Function = (x: any) => any;

interface PrivateRoutingConfig {
  pathname: string;
  user: any;
  push: any;
}

export const pipe = (...fns: Pipe) => (x: any) =>
  fns.reduce((y: any, f: Function) => f(y), x);

export const handleUserAuthChange = (dispatch: Dispatch<any>) =>
  auth().onAuthStateChanged(user => {
    dispatch(saveUserAction(user));
    dispatch(uiLoadingAction(false));
  });

export const handlePrivateRouting = ({ pathname, user, push }: PrivateRoutingConfig) => {
  switch (pathname) {
    case '/':
      if (user) {
        push('/dashboard');
        return null;
      }
      break;
    case '/dashboard':
      if (user === null) {
        push('/');
        return null;
      }
    default:
      break;
  }
}

export const preventDefault = ({ e, credentials, dispatch }: Compose): Compose => {
  e.preventDefault();
  return { credentials, dispatch };
}

export const trimFields = (type: TrimType, credentials: Project): Project => {
  const { name, description, githubRepositoryLink } = credentials;
  switch (type) {
    case 'project':
      return {
        name: name.trim(),
        description: description.trim(),
        githubRepositoryLink: githubRepositoryLink.trim(),
        userId: credentials.userId,
      }
    default:
      return;
  }
}