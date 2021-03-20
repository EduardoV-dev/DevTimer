import { FormAction, RegisterType } from "../../types/common";
import { TaskStatusType } from "../../types/components";
import { OnSubmit } from "../../types/events";

export interface User {
  displayName: string;
  photoURL: string;
}

export interface Project {
  name?: string;
  description?: string;
  githubRepositoryLink?: string;
  createdAt?: number;
  latestUpdate?: number;
  uid?: string;
  id?: string;
}

export interface Compose {
  e?: OnSubmit | React.FormEvent<Element>;
  errors?: ProjectFormErrors;
  data?: Project | Task;
  type?: RegisterType;
  clearInputs?: () => void;
  formAction?: FormAction;
}

export interface TaskFormErrors {
  name?: string;
  description?: string;
}

export interface ProjectFormErrors extends TaskFormErrors {
  githubRepositoryLink?: string;
}

export interface Task {
  projectId?: string;
  name?: string;
  description?: string;
  id?: string;
  time?: number;
  latestUpdate?: number;
  createdAt?: number;
  state?: TaskStatusType;
}

export interface TaskStateQuantity {
  total: number;
  todo: number;
  progress: number;
  completed: number;
}

export interface Modal {
  name: FormAction;
  value: boolean;
}

export interface Time {
  secs: number;
  mins: number;
  hrs: number;
}