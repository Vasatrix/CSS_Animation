import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingElement = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, {
      y: -10,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FloatingElement;
