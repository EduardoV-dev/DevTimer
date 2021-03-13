import React from 'react';
import { Avatar, Bold, Titles } from '../../../../models/interfaces/components';
import { Boolean, TaskStatusType } from '../../../../models/types/components';
import { SpanComp } from './span.component';

interface Props extends Avatar, Titles, Bold {
  children: string | number | string[];
  className?: string;
  type?: TaskStatusType;
  badge?: Boolean;
  badgeActive?: Boolean;
  fontColor?: any;
  fontFamily?: 'Raleway' | 'Montserrat';
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Span: React.FC<Props> = (props): JSX.Element => {
  return (  
    <SpanComp {...props} />
  );
}

export default Span;