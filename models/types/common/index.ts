import { Project } from "../../interfaces/dashboard";

export type Provider = 'facebook' | 'github';
export type RegisterType = 'project' | 'task';
export type SubmitEvent = (arg: Project) => Promise<any>;