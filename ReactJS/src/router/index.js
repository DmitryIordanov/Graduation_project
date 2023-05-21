import About from "../Pages/About";
import Posts from "../Pages/Posts";
import PostsPage from "../Pages/PostsPage";
import NotFound from "../Pages/NotFound";
import LoginPage from "../Pages/LoginPage";
import Main from "../Pages/Main";
import TrashPage from "../Pages/TrashPage";

export const privateRoutes = [
    {path: '/', element: <Main/>},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/trash', element: <TrashPage/>},
    {path: '/posts/:id', element: <PostsPage/>},
    {path: '/*', element: <NotFound/>},
]

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>},
    {path: '/*', element: <LoginPage/>},
]
