import React from 'react';
import { Li as LiComp } from './li.component';

interface Props {
  
}

const Li: React.FC<Props> = (props): JSX.Element => {
  return (
    <LiComp {...props} />
  )
}

export default Li;