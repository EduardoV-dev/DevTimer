import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { handleSignIn } from '../../utils/signIn';
import { Provider } from '../../models/types/general';
import { RootState } from '../../models/interfaces/general';
import { handleButtonLoading } from '../../utils/general';

const useSignIn = () => {
  const dispatch = useDispatch();
  const { isButtonLoading: { facebook, github } } = useSelector((state: RootState) => state.ui);
  const { push } = useRouter();

  const signIn = (provider: Provider): void => {
    handleButtonLoading(provider, true, dispatch);
    handleSignIn(provider)
      .then(() => {
        handleButtonLoading(provider, false, dispatch);
        push('/dashboard');
      });
  }

  return {
    facebook,
    github,
    signIn,
  };
}

export default useSignIn;