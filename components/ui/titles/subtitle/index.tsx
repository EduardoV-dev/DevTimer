import React from 'react';
import { Titles } from '../../../../models/interfaces/components';
import { H3 } from './subtitle.component';

interface Props extends Titles {
  children: string;
  className?: string;
}

const Subtitle: React.FC<Props> = (props): JSX.Element => {
  return (  
    <H3 {...props} />
  );
}

export default Subtitle;