import { useState } from "react";
import postProject from "../api/post-project";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../hooks/use-auth";

function NewProjectForm() {
    const navigate = useNavigate();// use the navigate hook
    const {auth, setAuth} = useAuth();
    console.log(auth);
    const[project, setProject] = useState({
        title: "",
        description : "",
        goal:"",
        image: "",
        is_open:"",
        date_close:"",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setProject((prevProject) => ({
        ...prevProject,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("project handlesubmit called")
    if (!project.title || !project.description || !project.goal || !project.image || !project.is_open || !project.date_close) {
        console.log("missing required fields");
        console.log(project);
    } else if (auth.token) {
        console.log("auth token exists");
        console.log(project);
        postProject(
            project.title,
            project.description,
            project.goal,
            project.image,
            project.is_open,
            project.date_close,
        ).then((
            response
        ) => {
            navigate(`/project/${response.id}`); // redirect to project page
        }
    )};
};


return (
    <form>START A NEW PROJECT
        <div>
            <label htmlFor="title">Title:</label>
            <input 
                type="text" 
                id="title" 
                placeholder="Title"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="description">Description:</label>
            <input 
                type="text" 
                id="description" 
                placeholder="Description"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="goal">goal:</label>
            <input 
                type="number" 
                id="goal" 
                placeholder="goal"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="image">image:</label>
            <input 
                type="url"
                id="image" 
                placeholder="image url"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="is_open">Open?:</label>
            <input 
                type="boolean" 
                id="is_open" 
                placeholder="Open?"
                onChange={handleChange}
            />      
        </div>
        <div>
            <label htmlFor="date_close">Closing Date:</label>
            <input 
                type="datetime-local" 
                id="date_close" 
                placeholder="when does it end?"
                onChange={handleChange}
            />      
        </div>
        <button 
            type="submit" 
            onClick={handleSubmit}>
                Start Project!
        </button>   
    </form>  
    );
};
export default NewProjectForm;