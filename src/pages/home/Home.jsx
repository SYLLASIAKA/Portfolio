import React from "react";
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"

const Home = () => {
    return (
        <section className="home section grid">
            <div className="home_div">
                <img src={Profile} alt="Profile Picture" className="home__img" />
            </div>

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title">
                        <span>I'm Sylla Siaka.</span><br /> FullStack Developer
                    </h1>

                    <p className="home__description">
                        I am a Full-Stack developer specialized in React and Node.js 
                        technologies. With an overflowing passion for crafting 
                        high-performance and user-friendly web applications, 
                        I am ready to turn your ideas into digital reality.
                    </p>

                    <Link to="/about" className="button">
                        More About Me
                        <span className="button__icon">
                            <FaArrowRight />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home