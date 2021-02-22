import React from 'react';
import { Div } from './wrapper.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Wrapper: React.FC<Props> = (props): JSX.Element => {
  return (  
    <Div {...props} />
  );
}

export default Wrapper;