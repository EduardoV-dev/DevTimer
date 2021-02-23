import React from 'react';
import { Form as FormContainer } from './form.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Form: React.FC<Props> = (props): JSX.Element => {
  return (
    <FormContainer {...props} />
  )
}

export default Form;