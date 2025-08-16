import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import imageBrand from '../assets/images/login.jpg'


const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithGoogle = async () => {
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

  const signInWithEmail = async () => {
    setAuthing(true);
    setError('');
    signInWithEmailAndPassword(auth, email, password)
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
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-sky-500">
      {/* Left section */}
      <div className="hidden md:flex w-1/2 h-full bg-[#283234] items-center justify-center">
      
      </div>
      

      {/* Right section */}
      <div className="w-full md:w-1/2 h-full bg-[#1a1a1a] flex flex-col p-6 sm:p-12 justify-center">
        <div className="w-full flex flex-col max-w-[450px] mx-auto">
          {/* Header */}
          <div className="w-full flex flex-col mb-10 text-white">
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">Login</h3>
            <p className="text-base sm:text-lg mb-4">Welcome back! Please enter your details</p>
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
          </div>

          {/* Email/Password Login Button */}
          <div className="w-full flex flex-col mb-4">
            <button
              className="w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition"
              onClick={signInWithEmail}
              disabled={authing}
            >
              Log In With Email and Password
            </button>
          </div>

          {/* Error */}
          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Divider */}
          <div className="w-full flex items-center justify-center relative py-4">
            <div className="w-full h-[1px] bg-gray-500"></div>
            <p className="text-sm sm:text-lg absolute text-gray-500 bg-[#1a1a1a] px-2">OR</p>
          </div>

          {/* Google Login */}
          <button
            className="w-full bg-amber-500 text-black font-semibold rounded-md p-3 text-center flex items-center justify-center cursor-pointer mt-5 hover:bg-sky-400 transition"
            onClick={signInWithGoogle}
            disabled={authing}
          >
            Log In With Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="w-full flex items-center justify-center mt-10">
          <p className="text-sm font-normal text-gray-400">
            Don't have an account?{' '}
            <span className="font-semibold text-white cursor-pointer underline">
              <a href="/signup">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
