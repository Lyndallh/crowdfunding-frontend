import useProjects from "../hooks/use-projects.js";
import ProjectCard from "../components/ProjectCard.jsx";
import "./HomePage.css";

function HomePage() {
    const  {projects} = useProjects();
    return(
        <div>
            <div id="project-list">
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;