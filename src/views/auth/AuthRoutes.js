import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AuthProvider, { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Pricing from "../pricing/pricing";
import ConnectBinance from "../binance/ConnectBinance";
import LoginPage from "../login/loginPage";
import SignupPage from "../login/signupPage";
import DashboardLayout from "../dashboard/DashboardLayout";
import LandingPage from "../landingPage/landingPage";
import PageNotFound from "../../components/pageNotFound";
import HomePage from "../homePage/homePage";

const AuthRoutes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/dashboard/*",
          element: <DashboardLayout />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/connect-binance",
          element: <ConnectBinance />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(token ? [] : routesForNotAuthenticatedOnly),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default AuthRoutes;
