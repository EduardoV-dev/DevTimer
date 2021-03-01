import React from 'react';
import { Boolean } from '../../../models/types/components';
import { OnChange } from '../../../models/types/events';
import { Input as InputComp } from './input.component';

interface Props {
  type: string;
  placeholder?: string;
  name?: string;
  value?: string;
  className?: string;
  noStyled?: Boolean;
  onChange?: (e: OnChange) => void;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  return (
    <InputComp {...props} />
  )
}

export default Input;