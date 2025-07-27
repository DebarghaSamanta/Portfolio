import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/MERN.png"
import dl from "../../assets/DL.svg"
import ml from "../../assets/ML.png"
import dsa from "../../assets/dsa.png"
const About = () => {
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="information">
          <div className="personal-info">
          <h1>Personal Info</h1>
          <ul>
          <li><span>NAME:</span> DEBARGHA SAMANTA</li>
          <li><span>AGE:</span>20 YEARS</li>
          <li><span>GENDER:</span> MALE</li>
          </ul>
          </div>
          <div className="education">
          <h1>Education</h1>
          <ul>
          <li><span>DEGREE:</span> BTECH</li>
          <li><span>BRANCH:</span> COMPUTER SCIENCE (DATA SCIENCE)</li>
          <li><span>CGPA</span>9.5</li>
          </ul>
          </div>
          <div className="skills">
          <h1>Skills</h1>
          <ul>
          <li>MACHINE LEARNING</li>
          <li>DEEP LEARNING</li>
          <li>MERN STACK</li>
          <li>DSA</li>
          </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MACHINE LEARNING" image={ml}/>
        <Card title="DEEP LEARNING" image={dl}/>
        <Card title="MERN STACK" image={mern}/>
        <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
