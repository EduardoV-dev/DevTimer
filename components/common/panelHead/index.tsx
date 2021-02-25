import React from 'react';
import { Actions } from '..';
import { PanelHeadType } from '../../../models/types/components';
import { getPanelHeadType } from '../../../utils/components';
import { Container, Title, Span } from '../../ui';
import s from './panelHead.module.scss';

interface Props {
  type: PanelHeadType;
}

const PanelHead: React.FC<Props> = ({
  type,
}): JSX.Element => {
  return (
    <Container className={s.panelHead}>
      <Title fontSize='1.25rem'>
        {getPanelHeadType(type)}
        <Span
          fontColor={({ theme }) => theme.primary}
          fontSize='1.25rem'
          className={s.panelHead_span}
        >DevTimer</Span>
      </Title>
      <Container>
        <Actions type='delete' />
        <Actions type='edit' />
      </Container>
    </Container>
  );
}

export default PanelHead;