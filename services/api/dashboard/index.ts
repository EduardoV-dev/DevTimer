import { Dispatch } from "redux";
import { Project, Task } from "../../../models/interfaces/dashboard";
import { loadProjectsAction, loadTasksAction } from "../../../redux/ducks/dashboard";
import { showNotificationAction } from "../../../redux/ducks/ui";
import { notificationMessages, PROJECTS, TASKS } from "../../consts";
import { auth, db } from "../../firebase";

export const signOut = () =>
  auth().signOut();

export const createNewProject = (project: Project) => {
  const now: number = Date.now();

  console.log(project);

  const newProject: Project = {
    ...project,
    createdAt: now,
    lastestUpdate: now,
  }

  return db.collection(PROJECTS).add(newProject);
}

export const getProjectsByUserId = (uid: string) => (dispatch: Dispatch<any>): void => {
  if (!uid) return;
  try {
    db.collection(PROJECTS).where('uid', '==', uid).orderBy('lastestUpdate', 'desc').onSnapshot(snapshot => {
      const projects = snapshot.docs.map(project => ({ id: project.id, ...project.data() }));
      dispatch(loadProjectsAction(projects));
    });
  } catch (e) {
    console.log(e);
    dispatch(showNotificationAction(notificationMessages().error.getProjectsById));
  }
}

const updateProjectLastestUpdate = (projectId: string) =>
  db.collection(PROJECTS).doc(projectId).update({ lastestUpdate: Date.now() });

export const createNewTask = (task: Task) => {
  const now: number = Date.now();

  const newTask: Task = {
    ...task,
    createdAt: now,
    lastestUpdate: now,
    state: 'todo',
  }

  return updateProjectLastestUpdate(task.projectId)
    .then(() => db.collection(TASKS).add(newTask));
}

export const getTasksById = (projectId: string) => (dispatch: Dispatch<any>): void => {
  if (!projectId) return;
  try {
    db.collection(TASKS).where('projectId', '==', projectId).orderBy('lastestUpdate', 'desc').onSnapshot(snapshot => {
      const tasks = snapshot.docs.map(task => ({ id: task.id, ...task.data() }));
      dispatch(loadTasksAction(tasks));
    });
  } catch (e) {
    dispatch(showNotificationAction(notificationMessages().error.getTasksById));
  }
}