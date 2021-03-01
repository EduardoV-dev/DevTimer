import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { handleButtonLoading, handleSignIn } from '../../utils/signIn';
import { Provider } from '../../models/types/general';
import { RootState } from '../../models/interfaces/general';

const useSignIn = () => {
  const dispatch = useDispatch();
  const {
    isFacebookButtonLoading,
    isGithubButtonLoading
  } = useSelector((state: RootState) => state.ui);
  const { push } = useRouter();

  const signIn = (provider: Provider): void => {
    dispatch(handleButtonLoading(provider, true));
    handleSignIn(provider)
      .then(() => {
        dispatch(handleButtonLoading(provider, false));
        push('/dashboard');
      });
  }

  return { 
    isFacebookButtonLoading,
    isGithubButtonLoading,
    signIn,
  };
}

export default useSignIn;