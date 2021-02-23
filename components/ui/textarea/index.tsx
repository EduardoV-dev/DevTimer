import React from 'react';
import { TextArea as TextAreaComp } from './textarea.component';

interface Props {
  className?: string;
}

const TextArea: React.FC<Props> = (props): JSX.Element => {
  return (
    <TextAreaComp {...props} />
  )
}

export default TextArea;