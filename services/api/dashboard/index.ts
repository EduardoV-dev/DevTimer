import { Dispatch } from "redux";
import { Project } from "../../../models/interfaces/dashboard";
import { saveProjectsAction } from "../../../redux/actions/dashboard";
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

export const getProjects = (dispatch: Dispatch<any>): void => {
  db.collection(PROJECTS).onSnapshot((snapshot: any) => {
    const projects = snapshot.map((project: any) => ({ id: project.id, ...project }));
    dispatch(saveProjectsAction(projects));
    console.log(projects);
  });
}