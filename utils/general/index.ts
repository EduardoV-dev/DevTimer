type Pipe = any[];
type Function = (x: any) => any;

export const pipe = (...fns: Pipe) => (x: any) =>
  fns.reduce((y: any, f: Function) => f(y), x);