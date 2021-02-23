import React from 'react';
import { getFormGroup } from '../../../utils/components';
import { Label, Container } from '../../ui';
import { FormGroupType } from '../../../models/types/components';
import { Component } from '../../../models/interfaces/components';
import s from './formGroup.module.scss';

interface Props {
  labelText: string;
  componentType: FormGroupType;
  type?: string;
  placeholder?: string;
}

const FormGroup: React.FC<Props> = ({
  labelText,
  componentType,
  type,
  placeholder,
}): JSX.Element => {
  const formInput: Component = getFormGroup(componentType);

  return (
    <Container className={s.formGroup}>
      <Label className={s.formGroup_label}>{labelText}</Label>
      <formInput.component {... { type, placeholder }} />
    </Container>
  );
}

export default FormGroup;