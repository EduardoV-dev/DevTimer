import React from 'react';
import { Boolean } from '../../../models/types/components';
import { Input as InputComp } from './input.component';

interface Props {
  type: string;
  placeholder?: string;
  className?: string;
  noStyled?: Boolean;
}

const Input: React.FC<Props> = (props): JSX.Element => {
  return (
    <InputComp {...props} />
  )
}

export default Input;