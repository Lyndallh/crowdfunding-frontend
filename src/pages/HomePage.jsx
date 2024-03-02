import useProjects from "../hooks/use-projects.js";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
    const {projects, isLoading, error} = useProjects();

    if (isLoading) {
        return (<p>loading...</p>)
    }
    if (error) {
        return (<p>{error.message}</p>)
    }
    return(
        <div>
            <Link to="/newproject">Make a request</Link>

            <h1>Looking to help out a budding athlete?</h1>
            <div id="project-list">
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;