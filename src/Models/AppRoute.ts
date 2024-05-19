import { RouteObject } from 'react-router-dom';

export type AppRoute = RouteObject & {
  children?: AppRoute[];
};
