import React from 'react';
import { Grid } from '../../ui';
import { ClockImage, SignIn } from '../../home';

interface Props {

}

const HomeLayout: React.FC<Props> = (): JSX.Element => {
  return (
    <Grid parent no_spacing>
      <Grid child xs={12}>
        <ClockImage />
      </Grid>
      <Grid child xs={12}>
        <SignIn />
      </Grid>
    </Grid>
  );
}

export default HomeLayout;