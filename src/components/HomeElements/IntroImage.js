import React, { useRef } from "react";
import introimg from "../../assets/codingBg.jpg";

const IntroImage = () => {
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const offsetX = x - rect.width / 2;
    const offsetY = y - rect.height / 2;

    const rotateX = (offsetY / 15).toFixed(2);
    const rotateY = (offsetX / 15).toFixed(2);

    const shadowX = (offsetX / 10).toFixed(2);
    const shadowY = (offsetY / 10).toFixed(2);
    const shadowBlur = 20;
    const shadowColor = "rgba(128, 128, 128, 0.2)";

    imgRef.current.style.boxShadow = `${shadowX}px ${shadowY}px ${shadowBlur}px ${shadowColor}`;


    imgRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const resetTransform = () => {
    imgRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    imgRef.current.style.boxShadow = "0 0 10px rgba(128, 128, 128, 0.2)";

  };

  return (
    <div className="intro-img" 
         style={{ backgroundImage: `url(${introimg})` }}
         ref={imgRef}
         onMouseMove={handleMouseMove}
         onMouseLeave={resetTransform}
    />
  );
};

export default IntroImage;