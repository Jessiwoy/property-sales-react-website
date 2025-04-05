import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../../presentation/pages/LoginPage'
import {ShowcasePage} from "../../presentation/pages/ShowcasePage.tsx";

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
])
