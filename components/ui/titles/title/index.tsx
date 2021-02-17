import React from 'react';
import { H2 } from './title.component';

interface Props {
  children: string;
  className?: string;
  uppercase?: string;
}

const Title: React.FC<Props> = (props): JSX.Element => {
  return ( 
    <H2 {...props} />
  );
}

export default Title;