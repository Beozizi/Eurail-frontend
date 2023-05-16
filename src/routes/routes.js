import config from '~/config';

// Layouts
import HeaderOnly from '~/layouts/HeaderOnly/HeaderOnly';


// Page
import Home from '~/pages/Home';
import Plan from '~/pages/Plan';
import LogIn from '~/pages/LogIn';
import SignIn from '~/pages/SignIn';
import Forgot from '~/pages/Forgot';
import Privacy from '~/pages/Privacy';
import Terms from '~/pages/Terms';
import PlaceSearch from '~/pages/PlaceSearch';

const publicRoutes = [
    {path: config.routes.home, component: Home,},
    {path: config.routes.plan, component: Plan},
    {path: config.routes.login, component: LogIn,},
    {path: config.routes.placeSearch, component: PlaceSearch, layout: HeaderOnly},
    {path: config.routes.signin, component: SignIn},
    {path: config.routes.forgot, component: Forgot},
    {path: config.routes.privacy, component: Privacy},
    {path: config.routes.terms, component: Terms},
]

const privateRoutes = []


export {
    publicRoutes,
    privateRoutes
}