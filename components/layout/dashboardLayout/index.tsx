import React, { useEffect } from 'react';
import { PrivateRoute } from '../../hoc';
import {
  Header,
  ProjectData,
  ProjectState,
  NewTaskForm,
  TasksList,
  TaskData,
  MenuToggler,
  Menu,
  AddProject,
} from '../../dashboard';
import { Container, Grid, Headline, Wrapper } from '../../ui';
import { Notification } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/common';
import { IllustrationIcon } from '../../icons';
import s from './dashboardLayout.module.scss';
import { getProjectsByUserId } from '../../../services/api/dashboard';

interface Props { }

const DashboardLayout: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    dashboard: { selectedProject },
    signIn: { user: { uid } },
  } = useSelector((state: RootState) => state);

  useEffect(() => { dispatch(getProjectsByUserId(uid)) }, []);

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
          {!selectedProject ? (
            <Container className={s.dashboardLayout_initialView}>
              <Wrapper>
                <Headline className={s.dashboardLayout_title}>
                  Create a project in order to display the panel
              </Headline>
                <IllustrationIcon
                  className={s.dashboardLayout_illustration}
                />
              </Wrapper>
            </Container>
          ) : (
              <>
                <Grid child xs={12} md={6} lg={7} xl={5}>
                  <ProjectData />
                </Grid>
                <Grid child xs={12} md={6} lg={5} xl={4}>
                  <ProjectState />
                </Grid>
                <Grid child xs={12} sm={6} lg={5} xl={3}>
                  <NewTaskForm />
                </Grid>
                <Grid child xs={12} sm={6} lg={7} xl={4}>
                  <TasksList />
                </Grid>
                <Grid child xs={12} lg={12} xl={8}>
                  <TaskData />
                </Grid>
              </>
            )}
        </Grid>
      </Grid>
      <MenuToggler />
      <Menu type='float' />
      <AddProject />
      <Notification />
    </Grid>
  );
}

export default PrivateRoute(DashboardLayout);