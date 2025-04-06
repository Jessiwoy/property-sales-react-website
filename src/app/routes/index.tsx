import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../../presentation/pages/LoginPage'
import {ShowcasePage} from "../../presentation/pages/ShowcasePage.tsx";
import NotFoundPage from "../../presentation/pages/NotFoundPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/login" replace />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/showcase',
        element: <ShowcasePage />,
    },
    {
        path: '/404',
        element: <NotFoundPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
])
