import React from 'react';
import { Titles } from '../../../../models/interfaces/components';
import { Boolean } from '../../../../models/types/components';
import { H2 } from './title.component';

interface Props extends Titles {
  children: (string | JSX.Element)[] | string;
  className?: string;
  uppercase?: Boolean;
}

const Title: React.FC<Props> = (props): JSX.Element => {
  return ( 
    <H2 {...props} />
  );
}

export default Title;