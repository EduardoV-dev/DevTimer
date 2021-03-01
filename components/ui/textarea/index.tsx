import React from 'react';
import { OnChange } from '../../../models/types/events';
import { TextArea as TextAreaComp } from './textarea.component';

interface Props {
  className?: string;
  name?: string;
  value?: string;
  onChange?: (e: OnChange) => void;
}

const TextArea: React.FC<Props> = (props): JSX.Element => {
  return (
    <TextAreaComp {...props} />
  )
}

export default TextArea;