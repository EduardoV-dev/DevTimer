import { TaskCompletedIcon, TaskProgressIcon, TasksIcon, TaskTodoIcon } from "../../components/icons";
import { TaskStatusType } from "../../models/types/components";
import { TaskStatus } from "../../models/interfaces/components";

export const getTaskType = (type: TaskStatusType): TaskStatus => {
  switch (type) {
    case 'total':
      return {
        text: 'Tasks in the project',
        icon: TasksIcon,
      }
    case 'todo':
      return {
        text: 'Tasks to do',
        icon: TaskTodoIcon,
      }
    case 'progress':
      return {
        text: 'Tasks in progress',
        icon: TaskProgressIcon,
      }
    case 'completed':
      return {
        text: 'Completed tasks',
        icon: TaskCompletedIcon,
      }
    default:
      break;
  }
} 