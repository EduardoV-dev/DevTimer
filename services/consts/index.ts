import { NotificationMessages } from "../../models/interfaces/common";

export const LS_IMAGE = 'LS_IMAGE';
export const PROJECTS = 'projects';
export const TASKS = 'tasks';

export const NOTIFICATIONS = (name: string = ''): NotificationMessages => ({
  success: {
    project_created: {
      type: 'success',
      title: 'New project created!!',
      message: `The project (${name}) was created successfully!`,
    },
    project_edited: {
      type: 'success',
      title: 'Project edited!',
      message: `The project (${name}) was edited successfully!`,
    },
    project_deleted: {
      type: 'success',
      title: 'Project deleted!',
      message: `The project was deleted successfully!`,
    },
    task_created: {
      type: 'success',
      title: 'New task created!',
      message: `The task (${name}) was created successfully!`,
    },
    task_edited: {
      type: 'success',
      title: 'Task edited!',
      message: `The task (${name}) was edited successfully!`,
    },
    task_deleted: {
      type: 'success',
      title: 'Task deleted!',
      message: `The task was deleted successfully!`,
    },
    task_time: {
      type: 'success',
      title: 'Time saved!',
      message: `A new time was added on this task!`,
    },
  },
  error: {
    project_created: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to create the project!',
    },
    project_edited: {
      type: 'error',
      title: 'Error!',
      message: `DevTimer was not able to edit the project`,
    },
    project_deleted: {
      type: 'error',
      title: 'Error!',
      message: `TDevTimer was not able to delete the project`,
    },
    task_created: {
      type: 'error',
      title: 'Error',
      message: 'DevTimer was not able to create the task',
    },
    task_edited: {
      type: 'error',
      title: 'Error!',
      message: `DevTimer was not able to edit the task`,
    },
    task_deleted: {
      type: 'error',
      title: 'Error!',
      message: `DevTimer was not able to delete the task`,
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
    task_time: {
      type: 'error',
      title: 'Error',
      message: `DevTimer was not able to save the new time, check your internet connection!`,
    },
  }
});