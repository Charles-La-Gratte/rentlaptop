import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  //Initialize firebase authentification and navigation
  const auth = getAuth();
  const navigate = useNavigate();

  //State variables for managing authentification state, email, pwd, confirm pwd and error messages
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  //Function to handle signup with google
  const signUpWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(response => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        setAuthing(false);
      });
  };
  //Function to handle sign up with email and pwd
  const signUpWithEmail = async () => {
    //check if pwd match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setAuthing(true);
    setError('');
    //use firebase to create a new user with email and pwd
    createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
        console.log(response.user.uid);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        setAuthing(false);
      });
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 h-full bg-[#282c34] items-center justify-center">
        {/* Branding / Image */}
        <h1 className="text-white text-3xl font-bold">RentLaptop</h1>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-[#1a1a1a] flex flex-col p-6 sm:p-12 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          {/* Header */}
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">Sign Up</h3>
            <p className="text-base sm:text-lg mb-4">
              Welcome! Please enter your information below to begin.
            </p>
          </div>

          {/* Inputs */}
          <div className="w-full flex flex-col mb-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Re-Enter Password"
              className="w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Email Signup Button */}
          <div className="w-full flex flex-col mb-4">
            <button
              onClick={signUpWithEmail}
              disabled={authing}
              className="w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition"
            >
              Sign Up With Email and Password
            </button>
          </div>

          {/* Divider */}
          <div className="w-full flex items-center justify-center relative py-4">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-sm sm:text-lg absolute text-gray-500 bg-[#1a1a1a] px-2">OR</p>
          </div>

          {/* Google Signup Button */}
          <button
            onClick={signUpWithGoogle}
            disabled={authing}
            className="w-full bg-sky-500 text-black font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer mt-5 hover:bg-sky-400 transition"
          >
            Sign Up With Google
          </button>
        </div>

        {/* Link to Login */}
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Already have an account?{" "}
            <span className="font-semibold text-white cursor-pointer underline">
              <a href="/login">Log In</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
