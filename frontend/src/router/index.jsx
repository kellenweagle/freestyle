import { createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Splash from '../components/Splash';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import CreateProductForm from '../components/CreateProductForm/CreateProductForm';
import UpdateProduct from '../components/UpdateProduct/UpdateProduct';
import ProductPage from '../components/ProductPage/ProductPage';
export const router = createBrowserRouter([

  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "/products",
        element: <CreateProductForm />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/products/:id/update",
        element: <UpdateProduct />,
      },
      {
        path: '/*',
        element: <PageNotFound />
      }
    ],
  },

]);
