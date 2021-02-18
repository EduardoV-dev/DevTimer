import React from 'react';
import { ButtonProps } from '../../../models/interfaces/components';
import { Btn } from './button.component';

interface Props extends ButtonProps {
  children: (string | JSX.Element)[] | string;
  className: string;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  return (  
    <Btn {...props} />
  );
}

export default Button;