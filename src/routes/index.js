const authRoutes = [
    {
        path: "/signin",
        exact: true,
        loader: () => import('./../pages/AuthPage/SigninPage')
    },
    {
        path: "/signup",
        exact: true,
        loader: () => import('./../pages/AuthPage/SignupPage')
    }
]

const publicRoutes = [
    {
        path: '/404',
        loader: () => import('./../pages/404Page')
    }
]

export default {
    authRoutes,
    publicRoutes
}