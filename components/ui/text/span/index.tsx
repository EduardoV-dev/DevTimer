import React from 'react';
import { Avatar, Titles } from '../../../../models/interfaces/components';
import { TaskStatusType } from '../../../../models/types/components';
import { SpanComp } from './span.component';

interface Props extends Avatar, Titles {
  children: string | number;
  className?: string;
  type?: TaskStatusType;
}

const Span: React.FC<Props> = (props): JSX.Element => {
  const { type } = props;
  console.log(type);

  return (  
    <SpanComp {...props} />
  );
}

export default Span;