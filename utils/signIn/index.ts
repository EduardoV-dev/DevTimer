import { signInWithFacebook, signInWithGithub } from "../../services/api/signIn";
import { pipe } from "../general";

type Provider = 'facebook' | 'github';

export const signIn = (provider: Provider): Promise<any> =>
  provider === 'facebook' ? signInWithFacebook() : signInWithGithub();

export const resolvePromise = (promise: Promise<any>): Promise<any> =>
  promise
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

export const handleSignIn = pipe(
  signIn,
  resolvePromise,
);