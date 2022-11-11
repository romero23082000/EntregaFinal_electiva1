import GeneralLayout from "../Layouts/GeneralLayout";
import SignIn from "../pages/Admin/signIn";
import Contact from "../pages/contact";
import Home from '../pages/home'
import NotFound from '../pages/notfound/notFound'

const routesAdmin = [
    {
        path: "/admin",
        layout: GeneralLayout,
        component: Home
    },
    {
        path: "/admin/login/*",
        layout: GeneralLayout,
        component: SignIn
    }
]
const routesGeneral = [
    {
        path: "/",
        layout: GeneralLayout,
        component: Home
    },
    {
        path: "*",
        layout: GeneralLayout,
        component: NotFound
    }
]
const projectRoutes = [...routesAdmin, ...routesGeneral]
export default projectRoutes