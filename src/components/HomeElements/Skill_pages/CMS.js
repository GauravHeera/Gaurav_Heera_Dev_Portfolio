import wordpress from "../../../assets/wordpress.jpg";
import shopify from "../../../assets/shopify.png";

const CMS = () => {

    const skillInfo = [
        {img: wordpress, name: "Wordpress"},
        {img: shopify, name: "Shopify"}
    ];
    
    return(
        <div className="cms-logos skill-type">

            <h2>CMS Platforms</h2>

            <div className="skill-img-container">
                {skillInfo.map((skill, idx) => (
                    <div className="skill" title={skill.name} key={idx} style={{backgroundImage: `url(${skill.img})`}}></div>
                ))}
            </div>

        </div>
    );
};

export default CMS;