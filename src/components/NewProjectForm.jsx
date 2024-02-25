import { useState } from "react";
import postProject from "../api/post-project";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../hooks/use-auth";

function NewProjectForm() {
    const navigate = useNavigate();// use the navigate hook
    const {auth, setAuth} = useAuth();
    const[project, setProject] = useState({
        title: "",
        description : "",
        goal:"",
        image: "",
        is_open:"",
        endDateTime:"",
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
    if (!project.title || !project.description || !project.goal || !project.image || !project.is_open || !project.endDateTime) {
        console.log("missing required fields");
    } else {
        postProject(
            project.title,
            project.description,
            project.goal,
            project.image,
            project.is_open,
            project.endDateTime
        ).then(() => {
            navigate("/projects/:id"); // redirect to home page
            });
    };
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
            <label htmlFor="isOpen">Open?:</label>
            <input 
                type="boolean" 
                id="isOpen" 
                placeholder="Open?"
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