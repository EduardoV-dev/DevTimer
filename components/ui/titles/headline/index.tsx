import React from 'react';
import { H1 } from './headline.component';

interface Props {
  children: string; 
  className?: string;
}

const Headline: React.FC<Props> = (props): JSX.Element => {
  return (
    <H1 {...props} />
  );
}

export default Headline;