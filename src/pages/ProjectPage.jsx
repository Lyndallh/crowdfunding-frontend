import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/Forms/PledgeForm";
import {useAuth} from "../hooks/use-auth";
import PledgeCard from "../components/PledgeCard/PledgeCard";
import "./ProjectPage.css";

function ProjectPage(){
//  useParams gets the id from the URL so that we can pass it to our useProject hook.
    const {id} = useParams();
 // useProject returns three pieces of info, grab all 3
    const {project, isLoading, error} = useProject(id);
    const {auth} = useAuth();
    if (isLoading){
    return (<p>loading, please wait...</p>)
    }
    if (error) {
    return (<p>{error.message}</p>)
    }
return (
    <div id = "project-page">
        <section id="project">
            <div id = "project-title">
                <h3>{project.title}</h3>
            </div>
            <img src={project.image} alt="project"/>
            <div id="project-details">
                {/* <h5>Requested by: </h5>
                <p>{project.owner.username}</p> */}
                {/* I'd like to add this later if possible */}
                <h5>Description: </h5>
                <p>{project.description}</p>
                <h5>Goal: </h5>
                <p>{project.goal}</p>
                <h5>Amount Raised: </h5>
                <p>{project.sum_pledges}</p>
                <PledgeForm projectId={id} />
            </div>
        </section>
        <section id="pledges-section">
        <h2 id="pledges-title">Equippers</h2>
        <ul id="pledges">
            {project.pledges.map((pledge, key) => {
                return ( 
                    <PledgeCard key={key}  pledge={pledge}/>
                );
            })}
        </ul>
        </section>
    </div>
    );
}
export default ProjectPage;