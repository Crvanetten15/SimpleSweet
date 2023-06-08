import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { motion } from framer-motion;
import './Home.css';
import Specialities from "../components/Specialities.jsx";
import Featured from "../components/Featured.jsx";

function Home() {
  return (
    <>
    <div className="title">
        <div id='sub-title'>
            Welcome to
        </div>
        <div id = 'main-title'>
            Simply Sweets
        </div>
        <div id = 'under-title'>
            Your Premier source for Gourmet Chocolate Candy and Confections right here in Mercer!
        </div>
    </div>
    <div className='home_img'>
    
    </div> 
    <Specialities />
    <Featured />
    </>
  );
}

export default Home;
