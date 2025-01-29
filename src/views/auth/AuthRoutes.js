import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider, { useAuth } from "./AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Pricing from "../pricing/pricing";
import ConnectBinance from "../binance/ConnectBinance";
// import Landing from "../landingPage";
import LoginPage from "../login/loginPage";
import SignupPage from "../login/signupPage";
import Dashboard from "../dashboard/Dashboard";
import LandingPage from "../landingPage/landingPage";

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
          path: "/dashboard",
          element: <Dashboard />,
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
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default AuthRoutes;
