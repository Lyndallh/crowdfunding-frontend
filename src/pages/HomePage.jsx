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
                    <h1>Making sporting dreams affordable, one athlete at a time</h1>
                    <h4>Are you a budding athlete who's biggest hurdle is the cost of equipment?</h4>
                    <Link className="btn" to="/newproject"><h3>Make a request</h3></Link>
                </div>  
            </section>
            <section id="projects">
                <div id="projects-text">
                   <h2>Looking to equip an athlete?</h2>
                   <h4>Browse requests, gear them up for success and level the playing field today</h4>  
                </div>
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