import ProjectsCard from "./Projects_data/ProjectsCard";
import ProjectsData from "./Projects_data/ProjectsData";
import { Helmet } from "react-helmet";

const Projects = () => {
    return(
        <div className="projects page" data-page="projects">

            <Helmet>
                <title>Gaurav Heera · Projects</title>
                <meta name="description" content="Browse development projects by Gaurav Heera, including a React-powered portfolio, Flask-based scientific calculator, and utility-first JavaScript demos. Each build showcases responsive UI, adaptive themes, and purposeful front-end architecture."></meta>
            </Helmet>


            <h1 className="projects_page_head">Projects</h1>

            {ProjectsData.map((project) => (
                <ProjectsCard key={project.id} projects={project}/>
            ))}

        </div>
    );
}
export default Projects;