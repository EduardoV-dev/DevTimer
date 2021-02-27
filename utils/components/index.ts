import {
  DeleteIcon,
  EditIcon,
  TaskCompletedIcon,
  TaskProgressIcon,
  TasksIcon,
  TaskTodoIcon
} from "../../components/icons";
import { Input, TextArea } from '../../components/ui';
import {
  FormGroupType,
  PanelHeadType,
  PanelHeadActions,
  TaskStatusType
} from "../../models/types/components";
import { Component } from "../../models/interfaces/components";

export const getTaskType = (type: TaskStatusType): Component => {
  switch (type) {
    case 'total':
      return {
        text: 'Tasks in the project',
        component: TasksIcon,
      }
    case 'todo':
      return {
        text: 'Tasks to do',
        component: TaskTodoIcon,
      }
    case 'progress':
      return {
        text: 'Tasks in progress',
        component: TaskProgressIcon,
      }
    case 'completed':
      return {
        text: 'Completed tasks',
        component: TaskCompletedIcon,
      }
    default:
      break;
  }
}

export const getFormGroup = (type: FormGroupType): Component => {
  switch (type) {
    case 'input':
      return { component: Input };
    case 'textarea':
      return { component: TextArea };
    default:
      break;
  }
}

export const getPanelHeadActions = (type: PanelHeadActions): Component => ({
  component: type === 'delete' ? DeleteIcon : EditIcon,
});

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getTaskStatusTag = (type: TaskStatusType): string =>
  type === 'progress' ? 'In progress' : capitalize(type);

export const getPanelHeadType = (type: PanelHeadType): string =>
  type === 'project' ? 'Project:' : 'Task:';

export const handleBackdrop = (menuState: boolean): void => {
  if (menuState) {
    document.querySelector('body').style.height = '100vh';
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.height = 'auto';
    document.querySelector('body').style.overflow = 'auto';
  }
}