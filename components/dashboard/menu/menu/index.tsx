import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../models/interfaces/common';
import { ProjectList } from '../..';
import { Backdrop, Logo, SearchInput } from '../../../common';
import { AddProjectIcon, ChevronIcon } from '../../../icons';
import { Button, Container, Span, Title, Wrapper } from '../../../ui';
import { useRouter } from 'next/router';
import { handleSignOut } from '../../../../utils/dashboard/handlers';
import { handleModal, handleMenu } from '../../../../utils/ui';
import cn from 'classnames';
import s from './menu.module.scss';

interface Props {
  type: 'aside' | 'float';
}

const Menu: React.FC<Props> = ({
  type,
}): JSX.Element => {
  const dispatch = useDispatch();
  const { isMenuDisplayed } = useSelector((state: RootState) => state.ui);
  const { push } = useRouter();

  const classNames = cn(s.menu, {
    [s[`menu_${type}`]]: type,
    [s[`menu_float_${isMenuDisplayed}`]]: isMenuDisplayed,
  });

  return (
    <>
      {(type === 'float' && isMenuDisplayed) && (
        <Backdrop onClick={() => dispatch(handleMenu(false))} />
      )}
      <Container
        bgColor={({ theme }) => theme.light}
        className={classNames}
      >
        <Wrapper>
          <Logo className={s.menu_logo} />
          <Button
            block='true'
            type='button'
            fontColor={({ theme }) => theme.dark}
            className={s.menu_addProject}
            onClick={() => dispatch(handleModal('project', { 
              name: 'add',
              value: true,
            }))}
          >
            <Span bold='false' className={s.menu_addProjectText}>
              New Project
            </Span>
            <AddProjectIcon width={54} height={54} />
          </Button>
          <Title fontSize='1.25rem' className={s.menu_projectsTitle}>
            Your projects:
        </Title>
          <SearchInput 
            placeholder='Search a project' 
            className={s.menu_search}
          />
          <ProjectList className={s.menu_projects} />
          <Button
            type='button'
            fontColor={({ theme }) => theme.dark}
            className={s.menu_signout}
            onClick={() => dispatch(handleSignOut(push))}
          >
            <ChevronIcon width={12} height={12} className={s.menu_chevron} />
            <Span bold='false'>Sign out</Span>
          </Button>
        </Wrapper>
      </Container>
    </>
  );
}

export default Menu;