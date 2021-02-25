import React from 'react';
import {
  Header,
  ProjectData,
  ProjectState,
  NewTaskForm,
  TasksList,
  TaskData,
} from '../../dashboard';
import { Grid } from '../../ui';

interface Props {

}

const DashboardLayout: React.FC<Props> = (props): JSX.Element => {
  return (
    <Grid parent>
      {/* <Grid child>
        Sidebar component here
      </Grid> */}
      <Grid parent child xs={12}>
        <Grid child xs={12}>
          <Header />
        </Grid>
        <Grid child xs={12}>
          <ProjectData />
        </Grid>
        <Grid child xs={12}>
          <ProjectState />
        </Grid>
        <Grid child xs={12}>
          <NewTaskForm />
        </Grid>
        <Grid child xs={12}>
          <TasksList />
        </Grid>
        <Grid child xs={12}>
          <TaskData />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DashboardLayout;