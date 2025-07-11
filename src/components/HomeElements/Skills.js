import React, { useEffect} from "react";
import FrontEnd from "./Skill_pages/FrontEnd";
import BackEnd from "./Skill_pages/BackEnd";
import DataHandling from "./Skill_pages/DataHandling";
import { skillShow } from "../../scripts/script";
import CMS from "./Skill_pages/CMS";
import Tools from "./Skill_pages/Tools";

const Skills = () => {

    useEffect(() => {
        const skillBtn = document.querySelectorAll('.skill-category');

        skillBtn.forEach(btn => {
            btn.addEventListener('click', skillShow);
        })
    }, []);

    return(
        <div className="skills">

            <h1 className="skills-heading">Development Technologies I Use</h1>

            <div className="skill-category-btn-wrap">
                <div className="front-end-btn skill-category active">Front-End</div>
                <div className="back-end-btn skill-category">Back-End</div>
                <div className="cms-platform-btn skill-category">CMS Platforms</div>
                <div className="data-handling-btn skill-category">Data Handling</div>
                <div className="tools-btn skill-category">Tools</div>
            </div>

            <FrontEnd/>
            <BackEnd/>
            <CMS/>
            <DataHandling/>
            <Tools/>
            
        </div>
    );
}
export default Skills;