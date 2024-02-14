import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard.jsx";
import "./HomePage.css";

function HomePage() {
    return(
        <div>
            <div id="project-list">
                {allProjects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;