import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";

function ProjectPage(){
//  `useParams gets the id from the URL so that we can pass it to our useProject hook.
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
                    <li key={key}>
                        {pledgeData.amount} from {pledgeData.supporter}
                    </li>
                );
            })}
        </ul>
    </div>
);

}

export default ProjectPage;