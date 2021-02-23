import {
  TaskCompletedIcon,
  TaskProgressIcon,
  TasksIcon,
  TaskTodoIcon
} from "../../components/icons";
import { Input, TextArea } from '../../components/ui';
import { FormGroupType, TaskStatusType } from "../../models/types/components";
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