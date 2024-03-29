import React from 'react';
import { Container, P, Span, Wrapper } from '../../ui';
import cn from 'classnames';
import useNotification from '../../../hooks/useNotification';
import s from './notification.module.scss';
import { useDispatch } from 'react-redux';
import { hideNotificationAction } from '../../../redux/ducks/ui';

interface Props {

}

const Notification: React.FC<Props> = (): JSX.Element => {
  const { isNotificationShown, notification } = useNotification();
  const dispatch = useDispatch();

  const classNames = cn(s.notification, {
    [s[`notification_${isNotificationShown}`]]: isNotificationShown,
  });

  return (
    <>
      {notification && (
        <Container
          bgColor={({ theme }) => notification.type === 'success' ? theme.primary : theme.danger}
          className={classNames}
        >
          <Wrapper>
            <Container className={s.notification_head}>
              <P
                fontColor={({ theme }) => notification.type === 'success' ? theme.light : theme.dark}
                bold='true'
              >{notification.title}</P>
              <Span
                fontColor={({ theme }) => notification.type === 'success' ? theme.light : theme.dark}
                bold='true'
                className={s.notification_x}
                onClick={() => dispatch(hideNotificationAction())}
              >&times;</Span>
            </Container>
            <P
              fontColor={({ theme }) => notification.type === 'success' ? theme.light : theme.dark}
            >{notification.message}</P>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default Notification;