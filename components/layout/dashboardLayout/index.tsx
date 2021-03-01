import React from 'react';
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
  AddProjectModal,
} from '../../dashboard';
import { Grid } from '../../ui';

interface Props {}

const DashboardLayout: React.FC<Props> = (): JSX.Element => {
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
        </Grid>
      </Grid>
      <MenuToggler />
      <Menu type='float' />
      <AddProjectModal />
    </Grid>
  );
}

export default PrivateRoute(DashboardLayout);