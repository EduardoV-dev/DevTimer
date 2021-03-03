import { Dispatch } from "redux";
import { Project } from "../../../models/interfaces/dashboard";
import { saveProjectsAction } from "../../../redux/actions/dashboard";
import { PROJECTS } from "../../consts";
import { auth, db } from "../../firebase";

export const signOut = () =>
  auth().signOut();

export const createNewProject = (project: Project) => {
  const now: number = Date.now();

  const newProject: Project = {
    ...project,
    createdAt: now,
    lastestUpdate: now,
  }

  return db.collection(PROJECTS).add(newProject);
}

export const getProjectsByUserId = (uid: string, dispatch: Dispatch<any>): void => {
  if (!uid) return;
  db.collection(PROJECTS).where('uid', '==', uid).onSnapshot((snapshot) => {
    const projects = snapshot.docs.map((project) => ({id: project.id, ...project.data()}));
    dispatch(saveProjectsAction(projects));
  });
}