

const ProjectsCard = ({projects}) => {
    return(
        <div className="project_card homeObj">

            <div className="project_preview" style={{backgroundImage: `url('${projects.img}')`}}></div>
            <h2>{projects.title}</h2>
            <p>{projects.description}</p>
            <h3>Highlights</h3>
            <ul>
                <li>{projects.p1}</li>
                <li>{projects.p2}</li>
                <li>{projects.p3}</li>
                <li>{projects.p4}</li>
            </ul>

            <button onClick={() => {
                const path = projects.btn;
                window.open(path, "_blank");
            }}>View Project</button>

        </div>
    )
}
export default ProjectsCard;