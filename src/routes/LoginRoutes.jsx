import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

const LoginRouter = {
  element: <Outlet />,
  children: [
    { element: <LoginPage />, path: '/' },
    { element: <LoginPage />, path: '*' },
    { element: <LoginPage />, path: 'login' },
  ],
};

export default LoginRouter;
