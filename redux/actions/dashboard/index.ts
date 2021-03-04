import {
  SAVE_PROJECTS,
  SAVE_PROJECT_ERRORS,
  SELECT_PROJECT,
} from "../../types/dashboard";
import { Project, ProjectErrors } from "../../../models/interfaces/dashboard";
import { Action } from "../../../models/interfaces/general";

export const saveProjectsAction = (projects: any): Action => ({
  type: SAVE_PROJECTS,
  payload: projects,
});

export const saveProjectErrorsAction = (errors: ProjectErrors): Action => ({
  type: SAVE_PROJECT_ERRORS,
  payload: errors,
});

export const selectProjectAction = (project: Project): Action => ({
  type: SELECT_PROJECT,
  payload: project,
})