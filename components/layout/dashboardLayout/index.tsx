import React from 'react';
import { Header, ProjectData, ProjectState } from '../../dashboard';
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
      </Grid>
    </Grid>
  );
}

export default DashboardLayout;