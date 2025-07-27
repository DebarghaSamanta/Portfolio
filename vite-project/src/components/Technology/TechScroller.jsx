import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import './TechScroller.css';

gsap.registerPlugin(MotionPathPlugin);

const technologies = ['💻', '⚛️', '🖌️', '📱', '🧠', '☁️']; // Replace with actual logos/icons if needed

const TechScroller = () => {
  const containerRef = useRef();

  useEffect(() => {
    const icons = gsap.utils.toArray('.tech-icon');

    icons.forEach((icon, i) => {
      gsap.to(icon, {
        motionPath: {
          path: "#arcPath",
          align: "#arcPath",
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
          start: i / icons.length,
          end: 1 + i / icons.length,
        },
        duration: 20,
        repeat: -1,
        ease: "linear"
      });
    });
  }, []);

  return (
    <div className="tech-scroller-wrapper" ref={containerRef}>
      <svg viewBox="0 0 500 250" className="semi-circle-path">
        <path id="arcPath" d="M50,200 A200,200 0 0,1 450,200" fill="none" />
      </svg>
      {technologies.map((tech, index) => (
        <div key={index} className="tech-icon">{tech}</div>
      ))}
    </div>
  );
};

export default TechScroller;
