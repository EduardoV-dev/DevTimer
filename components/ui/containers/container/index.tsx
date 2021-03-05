import React from 'react';
import { Boolean } from '../../../../models/types/components';
import { Div } from './container.component';

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  bgColor?: any;
  card?: Boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  center?: Boolean;
}

const Container: React.FC<Props> = (props): JSX.Element => {
  return (
    <Div {...props} />
  );
}

export default Container;