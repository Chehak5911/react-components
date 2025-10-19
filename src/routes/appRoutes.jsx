import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ComponentPage from "../pages/ComponentPage/ComponentPage";
import ComponentNotFound from "../pages/ComponentNotFound/ComponentNotFound";

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/component/:componentName',
        element: <ComponentPage />
    },
    {
        path: '/componentNotFound',
        element: <ComponentNotFound />
    }
])