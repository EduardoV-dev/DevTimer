import React from 'react';
import { OnChange } from '../../../models/types/events';
import { Select as SelectComp } from './select.component';

interface Props {
  children?: JSX.Element | JSX.Element[];
  name?: string;
  value?: string;
  className?: string;
  onChange?: (e: OnChange) => void;
}

const Select: React.FC<Props> = (props): JSX.Element => {
  return (
    <SelectComp {...props} />
  )
}

export default Select;