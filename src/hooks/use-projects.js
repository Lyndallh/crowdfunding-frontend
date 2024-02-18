import {useState, useEffect} from 'react';
import getPorjects from "../api/get-projects";

export default function useProjects() {
//using the state hook to create a state varialbe called projects and a function to update it called setProjects. 
// We initialize the state to an empty array.
    const [projects, setProjects] = useState([]);
    const {isLoading, setIsLoading} = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        getProjects()
        .then((projects) => {
            setProjects(projects);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    }, []);
    return {projects, isLoading, error};
}

