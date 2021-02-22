import React from 'react';
import { DeleteIcon, EditIcon } from '../../icons';
import { Container, P, Span } from '../../ui';
import s from './panelHead.module.scss';

interface Props {

}

const PanelHead: React.FC<Props> = (props): JSX.Element => {
  return (
    <Container className={s.panelHead}>
      <P bold='true'>Project: <Span>DevTimer</Span></P>
      <Container>
        <EditIcon 
          width={24}
          height={24}
        />
        <DeleteIcon 
          width={24}
          height={24}
          className={s.panelHead_icon}
        />
      </Container>
    </Container>
  );
}

export default PanelHead;