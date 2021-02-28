import { Dispatch } from "redux";
import { saveUserAction } from "../../redux/actions/auth";
import { uiLoadingAction } from "../../redux/actions/ui";
import { auth } from "../../services/firebase";

type Pipe = any[];
type Function = (x: any) => any;

export const pipe = (...fns: Pipe) => (x: any) =>
  fns.reduce((y: any, f: Function) => f(y), x);

  export const handleUserAuthChange = (dispatch: Dispatch<any>) => 
  auth().onAuthStateChanged(user => {
    dispatch(saveUserAction(user));
    dispatch(uiLoadingAction(false));
  });