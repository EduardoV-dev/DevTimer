import React from 'react';
import { Li as LiComp } from './li.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  bgColor?: any;
  title?: string;
}

const Li: React.FC<Props> = (props): JSX.Element => {
  return (
    <LiComp {...props} />
  )
}

export default Li;