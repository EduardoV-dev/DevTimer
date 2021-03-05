import { PrivateRoutingConfig } from "../../models/interfaces/components";

type Pipe = any[];
type Function = (x: any) => any;

export const pipe = (...fns: Pipe) => (x: any) =>
  fns.reduce((y: any, f: Function) => f(y), x);

export const handlePrivateRouting = ({ pathname, user, push }: PrivateRoutingConfig) => {
  switch (pathname) {
    case '/':
      if (user) {
        push('/dashboard');
        return null;
      }
      break;
    case '/dashboard':
      if (user === null) {
        push('/');
        return null;
      }
    default:
      break;
  }
}