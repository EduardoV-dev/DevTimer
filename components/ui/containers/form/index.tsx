import React, { FormEvent } from 'react';
import { Form as FormContainer } from './form.component';

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onSubmit?: (e: FormEvent) => void;
}

const Form: React.FC<Props> = (props): JSX.Element => {
  return (
    <FormContainer {...props} />
  )
}

export default Form;