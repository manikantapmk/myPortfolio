import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
        {/* {side bar} */}
        <div className="wrapper">
            <span>Manikanta Dev</span>
            <div className="social">
                <a href="#">
                    <img src="" alt="facebook" />
                </a>
                <a href="#">
                    <img src="" alt="instagram" />
                </a>
                <a href="#">
                    <img src="" alt="github" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar