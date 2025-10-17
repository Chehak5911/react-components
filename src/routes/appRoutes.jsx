import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ComponentPage from "../pages/ComponentPage/ComponentPage";

export const appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/component/:componentName',
        element: <ComponentPage />
    }
])