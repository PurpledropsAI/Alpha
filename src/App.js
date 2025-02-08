import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
// import LoginPage from "./views/login/loginPage";
// import SignupPage from "./views/login/signupPage";
// import Landing from "./views/landing/Landing";
// import Landing from "./views/login/signupPage";
// import Pricing from "./views/pricing/Pricing";
// import ConnectBinance from "./views/binance/ConnectBinance";
import AuthProvider from "./views/auth/AuthProvider";
import AuthRoutes from "./views/auth/AuthRoutes";
import Dashboard from "./views/dashboard/DashboardLayout";
// import Dashboard from "./views/dashboard/Dashboard";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/pricing" element={<Pricing />} />
    //     <Route path="/connect-binance" element={<ConnectBinance />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //   </Routes>
    // </BrowserRouter>
// {/* <Dashboard/> */}
    <AuthProvider>
      <AuthRoutes />
    </AuthProvider>
  );
}

export default App;
