import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";

function ProjectPage(){
//  useParams gets the id from the URL so that we can pass it to our useProject hook.
    const {id} = useParams();
 // useProject returns three pieces of info, grab all 3
    const {project, isLoading, error} = useProject(id);
    console.log(isLoading)
    if (isLoading){
    return (<p>loading, please wait...</p>)
    }
    if (error) {
    return (<p>{error.message}</p>)
    }

    console.log("pledges:", project.pledges)
return (
    <div>
        <h2>{project.title}</h2>
        <h3>Created at: {project.date_created}</h3>
        <h3>{`Status: ${project.is_open}`}</h3>
        <h3>Pledges:</h3>
        <ul>
            {project.pledges.map((pledgeData, key) => {
                return (
                    <ul key={key} className="pledges">
                        <li>
                        {pledgeData.supporter} pledged 
                        ${pledgeData.amount} and said 
                        <i>"{pledgeData.comment}"</i>
                        </li>
                    </ul>
                );
            })}
        </ul>
        <PledgeForm projectId={id} />
    </div>
);

}

export default ProjectPage;