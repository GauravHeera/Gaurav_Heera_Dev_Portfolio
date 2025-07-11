import html from "../../../assets/html.png";
import css from "../../../assets/css.jpg";
import js from "../../../assets/JS.png";
import reactjs from "../../../assets/React.png";
import angular from "../../../assets/angular.jpeg";
import jquery from "../../../assets/jquery.png";
import tailwind from "../../../assets/Tailwind.jpeg";
import bootstrap from "../../../assets/Bootstrap.jpeg";

const FrontEnd = () => {

    const skillInfo = [
        {img: html, name: "HTML/HTML5"},
        {img: css, name: "CSS/CSS3"},
        {img: js, name: "JavaScript"},
        {img: reactjs, name: "React.js"},
        {img: angular, name: "Angular.js"},
        {img: jquery, name: "JQuery"},
        {img: tailwind, name: "Tailwind CSS"},
        {img: bootstrap, name: "Bootstrap"}
    ];
    
    return(
        <div className="frontend-logos skill-type active">

            <h2>Front-End Development</h2>

            <div className="skill-img-container">
                {skillInfo.map((skill, idx) => (
                    <div className="skill" title={skill.name} key={idx} style={{backgroundImage: `url(${skill.img})`}}></div>
                ))}
            </div>

        </div>
    );
};

export default FrontEnd;