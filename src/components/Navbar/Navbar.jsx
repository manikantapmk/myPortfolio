import React from 'react'
import "./Navbar.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion"
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale: 0.5}}
            animate={{opacity:1, scale: 1}}
            transition={{duration: 0.5}}
            >Manikanta Dev</motion.span>
            <div className="social">
                <a href="#">
                <FaFacebook />
                </a>
                <a href="#">
                <FaInstagram />
                </a>
                <a href="#">
                <FaGithub />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar