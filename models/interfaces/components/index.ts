import { Boolean } from '../../types/components';

export interface ButtonProps {
  primary?: Boolean;
  facebook?: Boolean;
  github?: Boolean;
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

export interface Component {
  text?: string;
  component: (props: any) => JSX.Element;
}