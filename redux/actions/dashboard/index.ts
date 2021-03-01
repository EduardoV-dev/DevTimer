import {
  SAVE_PROJECT_ERRORS,
} from "../../types/dashboard";
import { ProjectErrors } from "../../../models/interfaces/dashboard";
import { Action } from "../../../models/interfaces/general";

export const saveProjectErrorsAction = (errors: ProjectErrors): Action => ({
  type: SAVE_PROJECT_ERRORS,
  payload: errors,
})