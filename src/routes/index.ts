import { routes } from '../configs';
import { Route } from '../interfaces';
import home from '../pages/home';
import notFound from '../pages/notFound';

const publicRoutes: Route[] = [
    { path: routes.home, element: home },
    { path: routes.notFound, element: notFound },
];
const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes };
