import { Dispatch } from "redux";
import { uiLoadingAction } from "../../../redux/actions/ui";
import { auth } from "../../firebase";

export const signOut = () => 
  auth().signOut();

export const handleSignOut = (push: any, dispatch: Dispatch<any>) => 
  signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
      push('/');
    })
    .catch((err: any) => console.log(err.message));