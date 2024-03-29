import { Boolean } from '../../types/components';

export interface ButtonProps {
  primary?: Boolean;
  danger?: Boolean;
  facebook?: Boolean;
  github?: Boolean;
  loading?: Boolean;
  disabled?: boolean;
  fontColor?: any;
  block?: Boolean;
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

export interface PrivateRoutingConfig {
  pathname: string;
  user: any;
  push: any;
}

export interface BadgeOrderBy {
  latest: boolean;
  name: boolean;
}