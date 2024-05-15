import { routes } from '../configs';
import { Route } from '../interfaces';
import DefaultLayout from '../layouts';
import home from '../pages/home';
import login from '../pages/login';
import notFound from '../pages/notFound';
import registerCourse from '../pages/registerCourse';
import studentDashboard from '../pages/studentDashboard';

const publicRoutes: Route[] = [
    { path: routes.home, element: home },
    { path: routes.notFound, element: notFound },
    { path: routes.login, element: login },
];
const privateRoutes: Route[] = [
    { path: routes.studentDashboard, element: studentDashboard, layout: DefaultLayout },
    { path: routes.registerCourse, element: registerCourse, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
