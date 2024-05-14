import { routes } from '../configs';
import { Route } from '../interfaces';
import home from '../pages/home';
import notFound from '../pages/notFound';
import login from "../pages/login"

const publicRoutes: Route[] = [
    { path: routes.home, element: home },
    { path: routes.notFound, element: notFound },
    { path: routes.login, element: login}
];
const privateRoutes: Route[] = [];

export { privateRoutes, publicRoutes };
