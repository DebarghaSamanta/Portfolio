import React from 'react'
import "./Home.css"
import man from "../../assets/hero.png"
import { Typewriter } from 'react-simple-typewriter'
const Home = () => {
  return (
    <div id ='home'>
      <div className="lefthome">
        <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">DEBARGHA SAMANTA</div>
            <div className="line3">
            <Typewriter
                words={["MACHINE LEARNING ENGINEER", "DEEP LEARNING ENGINEER", "FULL STACK ENGINEER"]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
            />
            </div>
        <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="" />
      </div>
    </div>
  )
}

export default Home
