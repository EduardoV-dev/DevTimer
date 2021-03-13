import React, { useEffect } from 'react';
import { withPrivateRoute } from '../../hoc';
import {
  Header,
  ProjectData,
  ProjectState,
  ProjectAddForm,
  TaskManager,
  TaskData,
  MenuToggler,
  Menu,
  TaskAddForm,
  ProjectEditForm,
} from '../../dashboard';
import { Container, Grid, Headline, Wrapper } from '../../ui';
import { Alert, Notification } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { IllustrationIcon } from '../../icons';
import s from './dashboardLayout.module.scss';
import { getProjectsByUserId } from '../../../services/api/dashboard';

interface Props { }

const DashboardLayout: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: {
      selectedProject,
      projects,
    },
    signIn: { user: { uid } },
  } = useSelector((state: RootState) => state);

  useEffect(() => { dispatch(getProjectsByUserId(uid)) }, []);

  if (!projects) return null;

  return (
    <Grid parent wrap='nowrap'>
      <Grid child xs={0} lg={3} xl={2}>
        <Menu type='aside' />
      </Grid>
      <Grid parent xs={12} lg={9} xl={10}>
        <Grid child xs={12}>
          <Header />
        </Grid>
        <Grid parent xs={12} spacing='sm'>
          {!projects.length ? (
            <Container className={s.dashboardLayout_initialView}>
              <Wrapper>
                <Headline className={s.dashboardLayout_title}>
                  {!projects.length ? 'Create a project to display the panel' : 'Select a project to display the panel'}
                </Headline>
                <IllustrationIcon
                  className={s.dashboardLayout_illustration}
                />
              </Wrapper>
            </Container>
          ) : (
            <>
              {selectedProject && (
                <>
                  <Grid child xs={12} md={12} xl={7}>
                    <ProjectData />
                  </Grid>
                  <Grid child xs={12} md={6} xl={5}>
                    <ProjectState />
                  </Grid>
                  <Grid child xs={12} md={6} xl={4}>
                    <TaskManager />
                  </Grid>
                  <Grid child xs={12} md={12} xl={8}>
                    <TaskData />
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      </Grid>
      <MenuToggler />
      <Menu type='float' />
      <ProjectAddForm />
      {selectedProject && (
        <>
          <ProjectEditForm />
          <TaskAddForm />
        </>
      )}
      <Notification />
      <Alert />
    </Grid>
  );
}

export default withPrivateRoute(DashboardLayout);