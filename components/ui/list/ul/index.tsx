import React from 'react';
import { Ul as UlComp } from './ul.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Ul: React.FC<Props> = (props): JSX.Element => {
  return (  
    <UlComp {...props} />
  );
}

export default Ul;