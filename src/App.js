import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './views/login/loginPage';
import SignupPage from './views/login/signupPage';
import HomePage from "./views/homePage/homePage";
import Pricing from "./views/pricing/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
