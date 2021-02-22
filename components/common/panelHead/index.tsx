import React from 'react';
import { Actions } from '..';
import { DeleteIcon, EditIcon } from '../../icons';
import { Container, Title, Span } from '../../ui';
import s from './panelHead.module.scss';

interface Props {

}

const PanelHead: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container className={s.panelHead}>
      <Title fontSize='1.25rem'>Project:
        <Span fontSize='1.25rem' className={s.panelHead_span}>DevTimer</Span>
      </Title>
      <Container>
        <Actions
          text='Edit'
          className={s.panelHead_text}
        >
          <EditIcon
            width={24}
            height={24}
            className={s.panelHead_icon}
          />
        </Actions>
        <Actions
          text='Delete'
          className={s.panelHead_text}
        >
          <DeleteIcon
            width={24}
            height={24}
            className={s.panelHead_icon}
          />
        </Actions>
      </Container>
    </Container>
  );
}

export default PanelHead;