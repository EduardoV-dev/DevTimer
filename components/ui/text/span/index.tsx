import React from 'react';
import { Avatar, Titles } from '../../../../models/interfaces/components';
import { Boolean, TaskStatusType } from '../../../../models/types/components';
import { SpanComp } from './span.component';

interface Props extends Avatar, Titles {
  children: string | number;
  className?: string;
  type?: TaskStatusType;
  badge?: Boolean;
  badgeActive?: Boolean;
  fontColor?: any;
  fontFamily?: 'Raleway' | 'Montserrat';
}

const Span: React.FC<Props> = (props): JSX.Element => {
  return (  
    <SpanComp {...props} />
  );
}

export default Span;