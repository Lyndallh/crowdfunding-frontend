import useProjects from "../hooks/use-projects.js";
import ProjectCard from "../components/ProjectCard/ProjectCard.jsx";
import "./HomePage.css";
import { Link } from "react-router-dom";
import hero from '../assets/images/hero.png';

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
            <section id="hero">
                <img className="heroImg"
                    src={hero} alt="person standing with sports equipment floating all around them"/>
                <div id="hero-text">
                    <h1>Equipme</h1>
                    <Link className="btn" to="/newproject"><h3>Make a request</h3></Link>
                </div>  
            </section>
            <section id="projects">
                <h2>Equip them</h2>
                <h4>Check out these requests for help:</h4>  
                <div id="project-list">
                    {projects.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData} />;
                    })}
                </div>
            </section>
        </div>
    );
}

export default HomePage;