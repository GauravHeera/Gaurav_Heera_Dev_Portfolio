import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const words = [
  { word: "Codes", icon: "bi-code-slash" },
  { word: "Ideas", icon: "bi-lightbulb-fill" },
  { word: "Designs", icon: "bi-layout-text-window" },
  { word: "Thoughts", icon: "bi-cpu-fill" },
  { word: "Logic", icon: "bi-diagram-3-fill" },
  { word: "UI/UX", icon: "bi-easel-fill" },
  { word: "Solutions", icon: "bi-tools" },
  { word: "Codes", icon: "bi-code-slash" },
  { word: "Ideas", icon: "bi-lightbulb-fill" },
  { word: "Designs", icon: "bi-layout-text-window" },
  { word: "Thoughts", icon: "bi-cpu-fill" },
  { word: "Logic", icon: "bi-diagram-3-fill" },
  { word: "UI/UX", icon: "bi-easel-fill" },
  { word: "Solutions", icon: "bi-tools" },
];

const Toggler = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); // 2s pause between transitions
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-wrapper">
      <span>Giving Life To</span>&nbsp;
      <div className="word-container">
        <div
          className="word-slider"
          style={{ transform: `translateY(-${index * 2.4}rem)` }}
        >
          {words.map((item, i) => (
            <div className="carousel-word" key={i}>
                <i className={`bi ${item.icon}`}></i>&nbsp;{item.word}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Toggler;
