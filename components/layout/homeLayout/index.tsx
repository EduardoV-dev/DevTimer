import React from 'react';
import { PrivateRoute } from '../../hoc';
import { Grid } from '../../ui';
import { ClockImage, SignIn } from '../../home';

interface Props {

}

const HomeLayout: React.FC<Props> = (): JSX.Element => {
  return (
    <Grid parent>
      <Grid child xs={12} lg={5}>
        <ClockImage />
      </Grid>
      <Grid child xs={12} lg={7}>
        <SignIn />
      </Grid>
    </Grid>
  )
}

export default PrivateRoute(HomeLayout);