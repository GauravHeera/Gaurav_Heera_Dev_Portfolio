

const AboutMe = () => {
const Details = [
    {
        heading: "Skills & Technologies",
        desc: "Completed a certificate course covering HTML, CSS, JavaScript, Wordpress, PHP, and MySQL from Raj Software Technology India Limited (Mumbai), building a strong foundation in web development and I have independently learned and practiced JSON, React, Tailwind CSS, Bootstrap, Angular, Node.js, and jQuery through extensive online research and hands-on development. Constant experimentation and project building have helped me refine my understanding and apply these technologies effectively."
    },
    {
        heading: "Education",
        desc: "Currently pursuing a Bachelor of Computer Applications (BCA) from Chandigarh University, continuously enhancing my technical and problem-solving skills."
    },
    {
        heading: "Experience & Learning Approach",
        desc: "As a fresher, my hands-on experience comes from dedicated practice, personal projects, and continuous experimentation, though a bunch of them are not hosted on web. I explore UI/UX design, front-end development, and troubleshooting complex challenges to refine my skills."
    }
];

    return(
        <div className="about">
            {Details.map((detail, index) => (
                <div className="about_section" key={index}>
                    <h2>{detail.heading}</h2>
                    <p>{detail.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default AboutMe;