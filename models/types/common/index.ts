import { Project } from "../../interfaces/dashboard";

export type Provider = 'facebook' | 'github';
export type RegisterType = 'project' | 'task';
export type SubmitEvent = (arg: Project) => Promise<any>;
export type FormAction = 'add' | 'edit';
export type VoidFunction = () => void;
export type TaskOrderBy = 'latestUpdate' | 'name';