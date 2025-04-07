// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./AuthProvider";

// const ProtectedRoute = () => {
//   const { isAuthenticated } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute; 


import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = () => {
  const { isAuthenticated, user } = useAuth();

  // 1) If user is not authenticated, redirect to /login.
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // 2) Check subscription validity
  //    (assuming your backend returns subscription_start, subscription_end)
  const subscriptionStart = user?.subscription_start
    ? new Date(user.subscription_start)
    : null;
  const subscriptionEnd = user?.subscription_end
    ? new Date(user.subscription_end)
    : null;

  const now = new Date();
  const hasValidSubscription =
    subscriptionStart && subscriptionEnd &&
    subscriptionStart <= now &&
    subscriptionEnd >= now;

  // If no valid subscription -> go to /pricing
  if (!hasValidSubscription) {
    return <Navigate to="/pricing" />;
  }

  // 3) If user is not connected to Binance -> /connect-binance
  if (!user?.binance_connected) {
    return <Navigate to="/connect-binance" />;
  }

  // 4) Otherwise proceed
  return <Outlet />;
};

export default ProtectedRoute;
