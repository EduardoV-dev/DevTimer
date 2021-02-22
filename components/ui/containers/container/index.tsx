import React from 'react';
import { Div } from './container.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  bgColor?: any;
}

const Container: React.FC<Props> = (props): JSX.Element => {
  return (
    <Div {...props} />
  );
}

export default Container;