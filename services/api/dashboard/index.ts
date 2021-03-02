import { Project } from "../../../models/interfaces/dashboard";
import { PROJECTS } from "../../consts";
import { auth, db } from "../../firebase";

export const signOut = () =>
  auth().signOut();

export const createNewProject = (project: Project): Promise<any> => {
  const now: number = Date.now();

  const newProject: Project = {
    ...project, 
    createdAt: now,
    lastestUpdate: now,
  }
  return db.collection(PROJECTS).add(newProject);
}