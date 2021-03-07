import React from 'react';
import { Actions } from '..';
import { PanelHeadType } from '../../../models/types/components';
import { OnClickSVG } from '../../../models/types/events';
import { getPanelHeadType } from '../../../utils/dashboard/components';
import { Container, Title, Span } from '../../ui';
import s from './panelHead.module.scss';

interface Props {
  type: PanelHeadType;
  name: string;
  deleteOnClick?: OnClickSVG;
  editOnClick?: OnClickSVG;
}

const PanelHead: React.FC<Props> = ({
  type,
  name,
  deleteOnClick,
  editOnClick,
}): JSX.Element => {
  return (
    <Container className={s.panelHead}>
      <Title fontSize='1.25rem' className={s.panelHead_title}>
        {getPanelHeadType(type)}
        <Span
          fontColor={({ theme }) => theme.primary}
          fontSize='1.25rem'
          className={s.panelHead_span}
        >{name}</Span>
      </Title>
      <Container className={s.panelHead_actions}>
        <Actions type='delete' onClick={deleteOnClick} />
        <Actions type='edit' onClick={editOnClick} />
      </Container>
    </Container>
  );
}

export default PanelHead;