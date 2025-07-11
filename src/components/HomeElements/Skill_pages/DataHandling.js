import mysql from "../../../assets/mysql.png";
import json from "../../../assets/json_img.jpg";

const DataHandling = () => {

    const skillInfo = [
        {img: mysql, name: "MySQL"},
        {img: json, name: "JSON"}
    ];
    
    return(
        <div className="db-logos skill-type">

            <h2>Data Handling</h2>

            <div className="skill-img-container">
                {skillInfo.map((skill, idx) => (
                    <div className="skill" title={skill.name} key={idx} style={{backgroundImage: `url(${skill.img})`}}></div>
                ))}
            </div>

        </div>
    );
};

export default DataHandling;