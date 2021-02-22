import React from 'react';
import { Avatar } from '../../../../models/interfaces/components';
import { SpanComp } from './span.component';

interface Props extends Avatar{
  children: string;
  className?: string;
}

const Span: React.FC<Props> = (props): JSX.Element => {
  return (  
    <SpanComp {...props} />
  );
}

export default Span;