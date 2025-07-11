import vscode from "../../../assets/vc_code_icon.jpg";
import copilot from "../../../assets/copilot.png";
import figma from "../../../assets/figma.jpeg";
import canva from "../../../assets/canva.png";

const Tools = () => {

    const skillInfo = [
        {img: vscode, name: "Visual Studio Code"},
        {img: copilot, name: "Microsoft Copilot"},
        {img: figma, name: "Figma"},
        {img: canva, name: "Canva Visual Suit"}
    ];
    
    return(
        <div className="tools-logos skill-type">

            <h2>Tools and Software</h2>

            <div className="skill-img-container">
                {skillInfo.map((skill, idx) => (
                    <div className="skill" title={skill.name} key={idx} style={{backgroundImage: `url(${skill.img})`}}></div>
                ))}
            </div>

        </div>
    );
};

export default Tools;