import { Dispatch } from "redux";
import {
  Project,
  Task,
  TaskStateQuantity,
  Time,
  User,
} from "../../models/interfaces/dashboard";
import {
  cleanProjectsListAction,
  createProjectAction,
  createProjectErrorAction,
  createProjectSuccessAction,
  createTaskAction,
  createTaskErrorAction,
  createTaskSuccessAction,
  deleteProjectAction,
  deleteProjectErrorAction,
  deleteProjectSuccessAction,
  deleteTaskAction,
  deleteTaskErrorAction,
  deleteTaskSuccessAction,
  editProjectAction,
  editProjectErrorAction,
  editProjectSuccessAction,
  editTaskAction,
  editTaskErrorAction,
  editTaskSuccessAction,
  loadTasksAction,
  selectProjectAction,
} from "../../redux/ducks/dashboard";
import {
  showNotificationAction,
  toggleProjectAlertAction,
  toggleTaskAlertAction,
  uiLoadingAction,
} from "../../redux/ducks/ui";
import { deleteProject, deleteTask, newTimeOnTask, signOut } from "../../services/api/dashboard";
import { LS_IMAGE, NOTIFICATIONS } from "../../services/consts";
import { Compose } from '../../models/interfaces/dashboard';
import { pipe } from "../common";
import {
  preventDefault,
  checkSubmitData,
  getTaskCount,
  createProject,
  createTask,
  editProject,
  editTask,
} from './common';
import { handleModal } from "../ui";

export const handleSignOut = (push: any) => (dispatch: Dispatch<any>) =>
  signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
      dispatch(cleanProjectsListAction());
      push('/');
    })
    .catch(err => console.log(err.message));

export const handleAvatarPictureURL = (user: any): User => ({
  displayName: user.displayName,
  photoURL: (
    user.providerData[0].providerId === 'facebook.com'
      ? localStorage.getItem(LS_IMAGE)
      : user.photoURL
  ),
});

export const handleFormatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const format = Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });
  return format.format(date);
}

export const handleTasksInState = (tasks: Task[]): TaskStateQuantity => ({
  total: tasks.length,
  todo: getTaskCount(tasks, 'todo'),
  progress: getTaskCount(tasks, 'progress'),
  completed: getTaskCount(tasks, 'completed'),
});

export const handleCreateProjectResponse = (response: Promise<any>, name: string, clearInputs: () => void) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(showNotificationAction(NOTIFICATIONS(name).success.project_created));
      dispatch(createProjectSuccessAction());
      clearInputs();
    })
    .catch(err => {
      console.log(err);
      dispatch(showNotificationAction(NOTIFICATIONS().error.project_created));
      dispatch(createProjectErrorAction());
    })
    .finally(() => dispatch(handleModal('project', { name: 'add', value: false })));
}

export const handleCreateTaskResponse = (response: Promise<any>, name: string, clearInputs: () => void) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(showNotificationAction(NOTIFICATIONS(name).success.task_created));
      dispatch(createTaskSuccessAction());
      clearInputs();
    })
    .catch(err => {
      console.log(err);
      dispatch(showNotificationAction(NOTIFICATIONS().error.task_created));
      dispatch(createTaskErrorAction());
    })
    .finally(() => dispatch(handleModal('task', { name: 'add', value: false })));
}

export const handleEditProjectResponse = (response: Promise<any>, project: Project, clearInputs: () => void) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(showNotificationAction(NOTIFICATIONS(project.name).success.project_edited));
      dispatch(editProjectSuccessAction(project));
      clearInputs();
    })
    .catch(err => {
      console.log(err);
      dispatch(showNotificationAction(NOTIFICATIONS().error.project_edited));
      dispatch(editProjectErrorAction());
    })
    .finally(() => dispatch(handleModal('project', { name: 'edit', value: false })));
}

export const handleEditTaskResponse = (response: Promise<any>, task: Task, clearInputs: () => void) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(showNotificationAction(NOTIFICATIONS(task.name).success.project_edited));
      dispatch(editTaskSuccessAction(task));
      clearInputs();
    })
    .catch(err => {
      console.log(err, task);
      dispatch(showNotificationAction(NOTIFICATIONS().error.project_edited));
      dispatch(editTaskErrorAction());
    })
    .finally(() => dispatch(handleModal('task', { name: 'edit', value: false })));
}

export const handleDeleteProjectResponse = (response: Promise<any>) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(deleteProjectSuccessAction());
      dispatch(toggleProjectAlertAction(false));
      dispatch(selectProjectAction(null));
      dispatch(loadTasksAction(null));
      dispatch(showNotificationAction(NOTIFICATIONS().success.project_deleted));
    })
    .catch(err => {
      console.log(err);
      dispatch(deleteProjectErrorAction());
      dispatch(showNotificationAction(NOTIFICATIONS().error.project_deleted));
    });
}

export const handleDeleteTaskResponse = (response: Promise<any>) => (dispatch: Dispatch<any>) => {
  response
    .then(() => {
      dispatch(deleteTaskSuccessAction());
      dispatch(toggleTaskAlertAction(false));
      dispatch(showNotificationAction(NOTIFICATIONS().success.task_deleted));
    })
    .catch(err => {
      console.log(err);
      dispatch(deleteTaskErrorAction());
      dispatch(showNotificationAction(NOTIFICATIONS().error.task_deleted));
    })
}

export const handleCreateProject = ({ e, data, clearInputs }: Compose) => (dispatch: Dispatch<any>) => {
  dispatch(createProjectAction());
  const args: Compose = { e, data };
  pipe(preventDefault, checkSubmitData('project'), createProject(dispatch, clearInputs))(args);
}

export const handleCreateTask = ({ e, data, clearInputs }: Compose) => (dispatch: Dispatch<any>) => {
  dispatch(createTaskAction());
  const args: Compose = { e, data };
  pipe(preventDefault, checkSubmitData('task'), createTask(dispatch, clearInputs))(args);
}

export const handleEditProject = ({ e, data, clearInputs }: Compose) => (dispatch: Dispatch<any>) => {
  dispatch(editProjectAction());
  const args: Compose = { e, data };
  pipe(preventDefault, checkSubmitData('project'), editProject(dispatch, clearInputs))(args);
}

export const handleEditTask = ({ e, data, clearInputs }: Compose) => (dispatch: Dispatch<any>) => {
  dispatch(editTaskAction());
  const args: Compose = { e, data };
  pipe(preventDefault, checkSubmitData('task'), editTask(dispatch, clearInputs))(args);
}

export const handleDeleteProject = (projectId: string) => (dispatch: Dispatch<any>) => {
  dispatch(deleteProjectAction());
  dispatch(handleDeleteProjectResponse(deleteProject(projectId)));
}

export const handleDeleteTask = (taskId: string, projectId: string) => (dispatch: Dispatch<any>) => {
  dispatch(deleteTaskAction());
  dispatch(handleDeleteTaskResponse(deleteTask(taskId, projectId)));
}

export const handleNewTimeOnTask = (time: Time, taskId: string, projectId: string, dispatch: Dispatch<any>)=>
  new Promise((res, rej) =>
    newTimeOnTask(time, taskId, projectId)
      .then(() => {
        dispatch(showNotificationAction(NOTIFICATIONS().success.task_time));
        res('');
      })
      .catch((e) => {
        dispatch(showNotificationAction(NOTIFICATIONS().error.task_time));
        console.log(e);
        rej(e);
      })
  );