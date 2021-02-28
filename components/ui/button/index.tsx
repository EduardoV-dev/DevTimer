import React from 'react';
import { ButtonProps } from '../../../models/interfaces/components';
import { LoadingIcon } from '../../icons';
import { Btn } from './button.component';

interface Props extends ButtonProps {
  children: (string | JSX.Element)[] | string;
  type: 'submit' | 'button';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props): JSX.Element => {
  const { loading } = props;
  
  return (
    <>
      {loading == 'true' ? (
        <Btn {...props}>
          <LoadingIcon 
            width={32}
            height={32}
          />
        </Btn>
      ) : (
          <Btn {...props} />
        )}
    </>
  );
}

export default Button;