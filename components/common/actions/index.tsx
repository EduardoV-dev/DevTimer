import React from 'react';
import { Component } from '../../../models/interfaces/components';
import { PanelHeadActions } from '../../../models/types/components';
import { getPanelHeadActions } from '../../../utils/components';
import s from './actions.module.scss';

interface Props {
  type?: PanelHeadActions;
}

const Actions: React.FC<Props> = ({
  type,
}): JSX.Element => {
  const action: Component = getPanelHeadActions(type);

  return (
    <>
      <action.component
        width={24}
        height={24}
        className={s.actions_icon}
      />
    </>
  );
}

export default Actions;