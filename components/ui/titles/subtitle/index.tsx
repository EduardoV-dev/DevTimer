import React from 'react';
import { H3 } from './subtitle.component';

interface Props {
  children: string;
  className?: string;
  uppercase?: boolean;
}

const Subtitle: React.FC<Props> = (props): JSX.Element => {
  return (  
    <H3 {...props} />
  );
}

export default Subtitle;