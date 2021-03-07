import React from 'react';
import { Component } from '../../../models/interfaces/components';
import { PanelHeadActions } from '../../../models/types/components';
import { OnClickSVG } from '../../../models/types/events';
import { getPanelHeadActions } from '../../../utils/dashboard/components';
import s from './actions.module.scss';

interface Props {
  type?: PanelHeadActions;
  onClick?: OnClickSVG;
}

const Actions: React.FC<Props> = ({
  type,
  onClick,
}): JSX.Element => {
  const action: Component = getPanelHeadActions(type);

  return (
    <>
      <action.component
        width={24}
        height={24}
        className={s.actions_icon}
        {... { onClick }}
      />
    </>
  );
}

export default Actions;