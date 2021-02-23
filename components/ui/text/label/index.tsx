import React from 'react';
import { Label as LabelComp } from './label.component';

interface Props {
  children: string;
  className?: string;
}

const Label: React.FC<Props> = (props): JSX.Element => {
  return (
    <LabelComp {...props} />
  )
}

export default Label;