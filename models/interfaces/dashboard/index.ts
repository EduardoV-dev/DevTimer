import { FormEvent } from "react";
import { Dispatch } from "redux";
import { OnChange, OnSubmit } from "../../types/events";

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
  userId?: string;
}

export interface AddProject {
  projectData: Project;
  handleOnChange: ({ target }: OnChange) => void;
  handleOnSubmit: (e: FormEvent) => void;
}

export interface Compose {
  e?: OnSubmit;
  dispatch?: Dispatch<any>;
  errors?: ProjectErrors;
  credentials?: any;
}

export interface ProjectErrors {
  name?: string;
  description?: string;
  githubRepositoryLink?: string;
}