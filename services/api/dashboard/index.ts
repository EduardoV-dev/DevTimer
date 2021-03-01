import { auth } from "../../firebase";

export const signOut = () => 
  auth().signOut();