import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./views/auth/AuthProvider";
import ProtectedRoute from "./views/auth/ProtectedRoute";
import PublicRoute from "./views/auth/PublicRoute";
import "./App.css";

// Import your components
import LoginPage from "./views/login/loginPage";
import SignupPage from "./views/login/signupPage";
import DashboardLayout from "./views/dashboard/DashboardLayout";
import ConnectBinance from "./views/homePage/connectBinance";
import LandingPage from "./views/landingPage/landingPage";
import Pricing from "./views/pricing/pricing";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard/*" element={<DashboardLayout />} />
            <Route path="/connect-binance" element={<ConnectBinance />} />
          </Route>

          {/* Catch all route - Redirect to dashboard if authenticated, otherwise to landing page */}
          <Route 
            path="*" 
            element={
              <Navigate to={localStorage.getItem("token") ? "/dashboard" : "/"} replace />
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
