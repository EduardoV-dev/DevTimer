import { Dispatch } from "redux";
import { Compose, Task, TaskStateQuantity, User } from "../../models/interfaces/dashboard";
import { TaskStatusType } from "../../models/types/components";
import { cleanProjectsListAction, createProjectAction, createTaskAction } from "../../redux/ducks/dashboard";
import { uiLoadingAction } from "../../redux/ducks/ui";
import { signOut } from "../../services/api/dashboard";
import { LS_IMAGE } from "../../services/consts";
import { pipe } from "../common";
import { preventDefault, checkSubmitData, addRegister } from './common';

export const handleSignOut = (push: any) => (dispatch: Dispatch<any>) =>
  signOut()
    .then(() => {
      dispatch(uiLoadingAction(true));
      dispatch(cleanProjectsListAction());
      push('/');
    })
    .catch((err: any) => console.log(err.message));

export const handleAvatarPictureURL = (user: any): User => ({
  displayName: user.displayName,
  photoURL: (
    user.providerData[0].providerId === 'facebook.com'
      ? localStorage.getItem(LS_IMAGE)
      : user.photoURL
  ),
});

export const handleOnSubmit = ({
  e,
  data,
  type,
  clearInputs,
  formAction,
}: Compose) => (dispatch: Dispatch<any>): void => {
  type === 'project' ? dispatch(createProjectAction()) : dispatch(createTaskAction());

  const args: Compose = {
    e,
    data,
    clearInputs,
  }

  pipe(
    preventDefault,
    checkSubmitData(type),
    addRegister(dispatch, clearInputs, formAction),
  )(args);
}

const getTaskCount = (tasks: Task[], type: TaskStatusType): number => 
  (tasks.filter(task => task.state === type)).length;

export const handleTasksInState = (tasks: Task[]): TaskStateQuantity => ({
  total: tasks.length,
  todo: getTaskCount(tasks, 'todo'),
  progress: getTaskCount(tasks, 'progress'),
  completed: getTaskCount(tasks, 'completed'),
});