import React, { useEffect } from 'react';
import { Grid } from '../../ui';
import { ClockImage, SignIn } from '../../home';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../models/interfaces/redux';
import { handleUserAuthChange } from '../../../utils/general';
import { useRouter } from 'next/router';

interface Props {

}

const HomeLayout: React.FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const {
    ui: { isUiLoading },
    auth: { user },
  } = useSelector((state: RootState) => state);

  useEffect(() => handleUserAuthChange(dispatch), []);

  if (user) {
    push('/dashboard');
    return null;
  }

  return (
    <>
      {(!isUiLoading && !user) && (
        <Grid parent>
          <Grid child xs={12} lg={5}>
            <ClockImage />
          </Grid>
          <Grid child xs={12} lg={7}>
            <SignIn />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default HomeLayout;