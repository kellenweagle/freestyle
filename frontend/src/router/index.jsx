import { createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import Splash from '../components/Splash';
import PageNotFound from '../components/PageNotFound/PageNotFound';
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
        path: '/*',
        element: <PageNotFound />
      }
    ],
  },

]);
