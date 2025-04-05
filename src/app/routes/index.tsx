import { createBrowserRouter, Navigate } from 'react-router-dom'
import { LoginPage } from '../../presentation/pages/LoginPage'

export const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/login" replace />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
    ])