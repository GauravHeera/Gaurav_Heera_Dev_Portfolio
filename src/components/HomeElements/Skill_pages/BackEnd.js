import php from "../../../assets/php.jpeg";
import nodejs from "../../../assets/node.png";
import python from "../../../assets/python.jpeg";
import api from "../../../assets/rest_api.jpg"

const BackEnd = () => {

    const skillInfo = [
        {img: php, name: "PHP"},
        {img: nodejs, name: "Node.js"},
        {img: python, name: "Pyhton"},
        {img: api, name: "RestFul API"}
    ];
    
    return(
        <div className="backend-logos skill-type">

            <h2>Back-End Development</h2>

            <div className="skill-img-container">
                {skillInfo.map((skill, idx) => (
                    <div className="skill" title={skill.name} key={idx} style={{backgroundImage: `url(${skill.img})`}}></div>
                ))}
            </div>

        </div>
    );
};

export default BackEnd;