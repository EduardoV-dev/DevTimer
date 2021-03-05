import { Dispatch } from "redux";
import { RegisterType, SubmitEvent } from "../../types/common";
import { OnSubmit } from "../../types/events";

export interface User {
  displayName: string;
  photoURL: string;
}

export interface Project {
  name: string;
  description: string;
  githubRepositoryLink?: string;
  createdAt?: number;
  lastestUpdate?: number;
  uid?: string;
  id?: string;
}

export interface Compose {
  e?: OnSubmit | React.FormEvent<Element>;
  errors?: ProjectFormErrors;
  data?: Project;
  type?: RegisterType;
}

export interface ProjectFormErrors {
  name?: string;
  description?: string;
  githubRepositoryLink?: string;
}