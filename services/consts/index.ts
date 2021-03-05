import { NotificationMessages } from "../../models/interfaces/common";

export const LS_IMAGE = 'LS_IMAGE';
export const PROJECTS = 'projects';
export const TASKS = 'tasks';

export const notificationMessages = (name: string = ''): NotificationMessages => ({
  success: {
    project: {
      type: 'success',
      title: 'New project created!!',
      message: `The project (${name}) was created successfully!`,
    },
    task: {
      type: 'success',
      title: 'New task created!',
      message: `The task (${name}) was created successfully!`,
    },
  },
  error: {
    project: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to create register, check your internet connection!',
    },
    task: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to create register, check your internet connection!',
    },
    network: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to sign in, check your internet connection!',
    },
    getProjectsById: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to load the projects, check your internet connection!',
    },
    getTasksById: {
      type: 'error',
      title: 'Error',
      message: `DevTimer was not able to load the project's tasks, check your internet connection!`,
    },
  }
});