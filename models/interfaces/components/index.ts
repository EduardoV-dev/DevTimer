import { Boolean } from '../../types/components';

export interface ButtonProps {
  primary?: boolean;
  facebook?: boolean;
  github?: boolean;
  loading?: string;
}

export interface Titles {
  uppercase?: Boolean;
  fontSize?: string;
}

export interface Avatar {
  avatar?: Boolean;
}

export interface Bold {
  bold?: Boolean;
}

export interface TaskStatus {
  text: string;
  icon: (props: any) => JSX.Element;
}