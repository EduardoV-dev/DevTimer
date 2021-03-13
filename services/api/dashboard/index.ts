import { Dispatch } from "redux";
import { Project, Task } from "../../../models/interfaces/dashboard";
import { loadProjectsAction, loadTasksAction } from "../../../redux/ducks/dashboard";
import { showNotificationAction } from "../../../redux/ducks/ui";
import { NOTIFICATIONS, PROJECTS, TASKS } from "../../consts";
import { auth, db } from "../../firebase";

export const signOut = () =>
  auth().signOut();

export const createNewProject = (project: Project) => {
  const now: number = Date.now();

  const newProject: Project = {
    ...project,
    createdAt: now,
    latestUpdate: now,
  }

  return db.collection(PROJECTS).add(newProject);
}

export const getProjectsByUserId = (uid: string) => (dispatch: Dispatch<any>): void => {
  if (!uid) return;
  try {
    db.collection(PROJECTS).where('uid', '==', uid).orderBy('latestUpdate', 'desc').onSnapshot(snapshot => {
      const projects = snapshot.docs.map(project => ({ id: project.id, ...project.data() }));
      dispatch(loadProjectsAction(projects));
    });
  } catch (e) {
    console.log(e);
    dispatch(showNotificationAction(NOTIFICATIONS().error.getProjectsById));
  }
}

const updateProjectLatestUpdate = (projectId: string) =>
  db.collection(PROJECTS).doc(projectId).update({ latestUpdate: Date.now() });

const updateTaskLatestUpdate = (taskId: string) =>
  db.collection(PROJECTS).doc(taskId).update({ latestUpdate: Date.now() });

export const createNewTask = (task: Task) => {
  const now: number = Date.now();

  const newTask: Task = {
    ...task,
    createdAt: now,
    latestUpdate: now,
    state: 'todo',
  }

  return updateProjectLatestUpdate(task.projectId)
    .then(() => db.collection(TASKS).add(newTask));
}

export const getTasksById = (projectId: string) => (dispatch: Dispatch<any>): void => {
  if (!projectId) return;
  try {
    db.collection(TASKS).where('projectId', '==', projectId).orderBy('latestUpdate', 'desc').onSnapshot(snapshot => {
      const tasks = snapshot.docs.map(task => ({ id: task.id, ...task.data() }));
      dispatch(loadTasksAction(tasks));
    });
  } catch (e) {
    dispatch(showNotificationAction(NOTIFICATIONS().error.getTasksById));
  }
}

export const editExistingProject = (project: Project) =>
  updateProjectLatestUpdate(project.id)
    .then(() => db.collection(PROJECTS).doc(project.id).update(project));

export const editExistingTask = (task: Task) =>
  updateTaskLatestUpdate(task.id)
    .then(() => db.collection(TASKS).doc(task.id).update(task));