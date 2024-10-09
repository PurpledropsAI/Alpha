import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginPage from './views/login/loginPage';
import SignupPage from './views/login/signupPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
