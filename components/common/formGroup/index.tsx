import React from 'react';
import { getFormGroup } from '../../../utils/dashboard/components';
import { Label, Container, P, Span } from '../../ui';
import { FormGroupType } from '../../../models/types/components';
import { Component } from '../../../models/interfaces/components';
import s from './formGroup.module.scss';
import { OnChange } from '../../../models/types/events';

interface Props {
  children?: JSX.Element | JSX.Element[];
  labelText: string;
  componentType: FormGroupType;
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: OnChange) => void;
  error?: string;
  autoFocus?: boolean;
}

const FormGroup: React.FC<Props> = ({
  children,
  labelText,
  componentType,
  type,
  placeholder,
  name,
  value,
  onChange,
  error,
  autoFocus,
}): JSX.Element => {
  const formInput: Component = getFormGroup(componentType);
  
  return (
    <Container className={s.formGroup}>
      <Label className={s.formGroup_label}>{labelText}</Label>
      <formInput.component
        {... {
          children,
          type,
          placeholder,
          name,
          value,
          onChange,
          autoFocus,
        }}
      />
      {error && (
        <Span
          className={s.formGroup_error}
          fontColor={({ theme }) => theme.danger}
        >{error}</Span>
      )}
    </Container>
  );
}

export default FormGroup;