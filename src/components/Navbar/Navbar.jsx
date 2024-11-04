import React from 'react'
import "./Navbar.scss"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* {side bar} */}
        <div className="wrapper">
            <span>Manikanta Dev</span>
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