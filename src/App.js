import './App.css';
import Layout from './components/Layout';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyArVsFJOjb5h7ug7qpmdO-rLuY4D-H_gpI",
  authDomain: "rentlaptop-be2a4.firebaseapp.com",
  projectId: "rentlaptop-be2a4",
  storageBucket: "rentlaptop-be2a4.firebasestorage.app",
  messagingSenderId: "844635562078",
  appId: "1:844635562078:web:63ef3cab2c32c99b4154cf"
};

 initializeApp(firebaseConfig);
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/:slug' element={<Detail/>}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Route>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
