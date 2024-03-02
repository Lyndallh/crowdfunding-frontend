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
            <h3>Looking for help to make your dreams come true?</h3>
            <Link className="btn" to="/newproject">Make a request</Link>

            <h3>Ready to make a difference?</h3>
            <h4>Check out these requests for help:</h4>  
            <div id="project-list">
                {projects.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData} />;
                })}
            </div>
        </div>
    );
}

export default HomePage;