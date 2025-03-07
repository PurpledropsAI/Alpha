import React, { useState } from "react";
import loginBg from "./assets/loginBg.png";
import { FaInstagram } from "react-icons/fa";
import { TbBrandThreads } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { BASE_URL, SIGN_UP_URL } from "../../api/api";
import { RotatingLines } from "react-loader-spinner";
import ConfirmModal from "../../components/modals/confirmModal";
import FailureModal from "../../components/modals/failureModal";
import { HiCheckCircle } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

// Add these helper functions at the top of your file
const encryptOTP = (otp, email) => {
  // Simple encryption using email as salt
  const salt = email
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const encryptedOTP = otp
    .split("")
    .map((digit) => {
      // Encrypt each digit using the salt
      const encrypted = (parseInt(digit) + salt) % 10;
      return encrypted.toString();
    })
    .join("");
  return encryptedOTP;
};

const verifyEncryptedOTP = (inputOTP, encryptedOTP, email) => {
  // Encrypt the input OTP and compare with stored encrypted OTP
  const encryptedInput = encryptOTP(inputOTP, email);
  return encryptedInput === encryptedOTP;
};

export default function SignupPage() {
  let [passWordType, setPasswordType] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  const [isFailureModal, setIsFailureModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // New states for OTP functionality
  const [otpSent, setOtpSent] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpLoading, setIsOtpLoading] = useState(false);

  // Add a new state for OTP-specific errors
  const [otpError, setOtpError] = useState("");

  // Add new state for encrypted OTP
  const [encryptedOTPData, setEncryptedOTPData] = useState(null);

  // Add new state for email errors
  const [emailError, setEmailError] = useState("");

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const auth = useAuth();
  const navigate = useNavigate();

  // Generate random 6 digit OTP
  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Send OTP via Brevo API
  const sendOTP = async () => {
    if (!inputs.email) {
      setEmailError("Please enter email first");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputs.email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    try {
      setIsOtpLoading(true);
      setOtpError("");
      setErrorMessage("");

      // Generate OTP
      const generatedOTP = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // Store encrypted OTP with timestamp
      const encryptedOTP = encryptOTP(generatedOTP, inputs.email);
      setEncryptedOTPData({
        otp: encryptedOTP,
        timestamp: new Date().getTime(),
        email: inputs.email,
      });

      // Brevo configuration
      const brevoConfig = {
        url: "https://api.brevo.com/v3/smtp/email",
        headers: {
          accept: "application/json",
          "api-key": process.env.REACT_APP_BREVO_API_KEY,
          "content-type": "application/json",
        },
        data: {
          sender: {
            email: "alpharoboticsllp@gmail.com",
            name: "Alpha Robotics LLP",
          },
          to: [{ email: inputs.email }],
          subject: "Email Verification OTP",
          htmlContent: `<html><body>
            <h1>Your OTP for Email Verification</h1>
            <p>Your OTP is: <strong>${generatedOTP}</strong></p>
            <p>This OTP is valid for 5 minutes.</p>
            </body></html>`,
        },
      };

      await axios.post(brevoConfig.url, brevoConfig.data, {
        headers: brevoConfig.headers,
      });

      setOtpSent(true);
      setSuccessMessage("OTP sent successfully!");
    } catch (error) {
      setOtpError("Failed to send OTP. Please try again.");
      console.error("OTP Send Error:", error);
    } finally {
      setIsOtpLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = () => {
    if (!encryptedOTPData) {
      setOtpError("Please request a new OTP");
      return;
    }

    // Check if OTP is expired (5 minutes)
    if (new Date().getTime() - encryptedOTPData.timestamp > 5 * 60 * 1000) {
      setOtpError("OTP has expired. Please request a new one");
      setEncryptedOTPData(null);
      return;
    }

    // Verify email matches
    if (encryptedOTPData.email !== inputs.email) {
      setOtpError("Invalid OTP for this email");
      return;
    }

    // Verify OTP
    if (verifyEncryptedOTP(otp, encryptedOTPData.otp, inputs.email)) {
      setIsEmailVerified(true);
      setOtpError("");
      setSuccessMessage("Email verified successfully!");
      setEncryptedOTPData(null); // Clear OTP data after successful verification
    } else {
      setOtpError("Invalid OTP");
    }
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    if (!isEmailVerified) {
      setErrorMessage("Please verify your email first");
      setIsLoading(false);
      return;
    }

    if (
      inputs.username !== "" &&
      inputs.password !== "" &&
      inputs.phone_number !== "" &&
      inputs.email !== ""
    ) {
      console.log("inpts", inputs);

      try {
        const response = await axios.post(
          `${BASE_URL}/api/users/signup/`,
          inputs
        );
        console.log("response: ", response);

        if (response.status.toString().startsWith("2")) {
          setInputs({
            username: "",
            email: "",
            phone_number: "",
            password: "",
          });

          const data = response.data;
          setSuccessMessage(data.message);

          if (data?.message === "Signup successful") {
            setIsSuccessModal(true);
          } else {
            setIsFailureModal(true);
          }
        }
      } catch (err) {
        let errors = [];
        let errorData = err.response.data;

        if (errorData.email) {
          setEmailError(errorData.email.join(" "));
        }
        
        // Handle other errors as before
        if (errorData.username) {
          errors.push(...errorData.username);
        }
        if (errorData.phone_number) {
          errors.push(...errorData.phone_number);
        }

        const joinedString = errors.join(" \n");
        setErrorMessage(joinedString);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setErrorMessage("Please fill in all the details");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleModalOnClose = () => {
    setIsSuccessModal(false);
    navigate("/login");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-full w-screen sm:p-10 bg-cover bg-center bg-no-repeat text-white bg-black background-imag">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 max-sm:pt-20">
        <div className="text-2xl sm:text-4xl md:text-5xl">
          Get started <br /> with{" "}
          <span className="text-green-500 font-semibold font-poppins">
            Alpha Robotics LLP
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-0">
        <div className="p-3 sm:p-8 md:p-10 rounded-3xl shadow-lg border w-[30rem]">
          <h1 className="text-2xl md:text-3xl  font-semibold text-center">
            Hey! Welcome <span className="wave-emoji">👋</span>
          </h1>
          <p className="text-gray-400 mb-8  text-center">
            Register your account to get started today..!
          </p>

          <form className="space-y-4" onSubmit={handleSubmitEvent}>
            <div>
              <label className="block mb-1 text-[12px]" htmlFor="username">
                Username*
              </label>
              <input
                name="username"
                type="text"
                value={inputs.username}
                onChange={handleInput}
                className="w-full px-4 p-3 rounded-3xl border bg-transparent outline-none"
                placeholder="Username"
              />
            </div>

            <div>
              <label className="block mb-1 text-[12px]" htmlFor="email">
                Email*
              </label>
              <div className="flex gap-2 items-center">
                <div className="relative flex-1">
                  <input
                    name="email"
                    type="email"
                    value={inputs.email}
                    onChange={(e) => {
                      handleInput(e);
                      setEmailError(""); // Clear email error when user types
                    }}
                    className={`w-full px-4 py-3 rounded-3xl border bg-transparent outline-none ${
                      isEmailVerified ? "pr-12" : ""
                    }`}
                    placeholder="xyz@gmail.com"
                    disabled={isEmailVerified}
                  />
                  {isEmailVerified && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-green-500">
                      <HiCheckCircle className="w-5 h-5" />
                      <span className="text-xs">Verified</span>
                    </div>
                  )}
                </div>
                {!isEmailVerified && (
                  <button
                    type="button"
                    onClick={sendOTP}
                    disabled={isOtpLoading}
                    className={`px-6 py-3 rounded-3xl transition whitespace-nowrap ${
                      isOtpLoading
                        ? "bg-gray-500 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-600"
                    }`}
                  >
                    {isOtpLoading
                      ? "Sending..."
                      : otpSent
                      ? "Resend OTP"
                      : "Send OTP"}
                  </button>
                )}
              </div>
              {emailError && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {emailError}
                </span>
              )}
              {successMessage && (
                <span className="text-green-500 text-[12px] mt-1 block">
                  {successMessage}
                </span>
              )}
            </div>

            {otpSent && !isEmailVerified && (
              <div>
                <label className="block mb-1 text-[12px]" htmlFor="otp">
                  Enter OTP*
                </label>
                <div className="flex gap-2 items-center">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => {
                        setOtpError(""); // Clear OTP error when user types
                        setOtp(e.target.value);
                      }}
                      className="w-full px-4 py-3 rounded-3xl border bg-transparent outline-none"
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={verifyOTP}
                    className="px-6 py-3 rounded-3xl bg-green-500 hover:bg-green-600 transition whitespace-nowrap"
                  >
                    Verify OTP
                  </button>
                </div>
                {otpError && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {otpError}
                  </span>
                )}
              </div>
            )}
            

            <div>
              <label className="block  mb-1 text-[12px]" htmlFor="phone">
                Phone Number*
              </label>
              {/* <div className="flex rounded-3xl">
                <div className="flex items-center bg-gray-700 px-3 rounded-l-3xl">
                  <span className="">🇮🇳</span>
                </div>
                <input
                  name="phone_number"
                  type="text"
                  value={inputs.phone_number}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-r-3xl border bg-transparent outline-none  "
                  placeholder="+00 0000000000"
                />
              </div> */}
              <div className="bg-transparent outline-none border rounded-[2rem] p-3 px-4">
              <PhoneInput
                country={"in"}
                enableSearch={true}
                enableAreaCodes={true}
                // inputProps={{
                //   name: "Phone",
                //   // placeholder: "",
                // }}
                inputStyle={{
                  background: "transparent",
                  outline: "none",
                  border: "none",
                  padding: "5px 50px",
                  color: "white",
                  boxShadow: "none",
                }}
                containerStyle={{
                  border: "none",
                  outline: "none",
                  color: "black",
                  background: "transparent",
                  marginLeft: "-12px",
                }}
                value={inputs.phone_number}
                onChange={(phone) =>
                  setInputs((prev) => ({ ...prev, phone_number: phone }))
                }
              />
            </div>
            </div>

            <div>
              <label className="block  mb-1 text-[12px]" htmlFor="password">
                Password*
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={passWordType ? "password" : "text"}
                  value={inputs.password}
                  onChange={handleInput}
                  className="w-full px-4 py-3 rounded-3xl border bg-transparent  outline-none "
                  placeholder="********"
                />
                <span
                  className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer"
                  onClick={() => setPasswordType(!passWordType)}
                >
                  👁️
                </span>
              </div>
              {errorMessage && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errorMessage}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isEmailVerified || isLoading}
              className={`flex justify-center w-full py-2 rounded-3xl transition font-bold ${
                !isEmailVerified
                  ? "bg-gray-500 cursor-not-allowed"
                  : isLoading
                  ? "bg-green-300"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {isLoading ? (
                <RotatingLines
                  visible={true}
                  height="40"
                  width="40"
                  color="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                />
              ) : (
                <span>Sign Up</span>
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-green-500 hover:underline">
              Log In
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8 space-x-4 ">
            <div>
              <i className="fab fa-instagram"></i>
            </div>
            <div>
              <i className="fab fa-facebook"></i>
            </div>
            <div>
              <i className="fab fa-twitter"></i>
            </div>
            <div>
              <i className="fab fa-google"></i>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="logo"
        src="/logo.png"
        className="absolute top-5 sm:top-10 left-5 sm:left-10 w-14 sm:w-20"
      ></img>
      <div className="max-sm:hidden absolute flex justify-between bottom-10 left-10 sm:gap-[20rem]">
        <div>© 2025 alpha All Rights Reserved.</div>
        <div className="flex gap-4 text-black">
          <div className="bg-white rounded-full p-2">
            <FaInstagram />
          </div>
          <div className="bg-white rounded-full p-2">
            <FaXTwitter />
          </div>
          <div className="bg-white rounded-full p-2">
            <FiFacebook />
          </div>
          <div className="bg-white rounded-full p-2">
            <TbBrandThreads />
          </div>
        </div>
      </div>

      {isSuccessModal && (
        <ConfirmModal
          title="Signup Successfull"
          message1="Please login in to proceed."
          isClose={true}
          onClose={() => handleModalOnClose()}
        />
      )}
      {isFailureModal && (
        <FailureModal
          message1="Some error occurred."
          message2="Please try again."
          onClose={() => handleModalOnClose()}
        />
      )}
    </div>
  );
}
