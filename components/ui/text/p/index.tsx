import React from 'react';
import { Bold } from '../../../../models/interfaces/components';
import { P as Pgph } from './p.component';

interface Props extends Bold {
  children: (JSX.Element | String)[] | string;
}

const P: React.FC<Props> = (props): JSX.Element => {
  return (  
    <Pgph {...props} />
  );
}

export default P;