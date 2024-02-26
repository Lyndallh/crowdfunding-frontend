import { useState } from "react";
import postPledge from "../api/post-pledge";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../hooks/use-auth";

function NewPledgeForm() {
    const navigate = useNavigate();// use the navigate hook
    const {auth, setAuth} = useAuth();
    console.log(auth);
    const[pledge, setPledge] = useState({
        amount: "",
        comment: "",
        anonymous: "",
        project: "",
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
        ...prevPledge,
        [id]: value,
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log("pledge handlesubmit called")
    if (!pledge.amount || !pledge.comment || !pledge.anonymous || !pledge.project) {
     console.log("missing required fields");
        console.log(pledge);
    } else if (auth.token) {
        console.log("auth token exists");
        console.log(pledge);
        postPledge(
            pledge.amount,
            pledge.comment,
            pledge.anonymous,
            pledge.project,
        ).then((
            response
        ) => {
            navigate(`/project/${response.id}`); // redirect to home page
        }
    )};
};


return (
    <form>make a pledge
        <div>
            <label htmlFor="amount">Amount:</label>
            <input 
                type="number" 
                id="amount" 
                placeholder="Amount"
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="comment">Comment:</label>
            <input 
                type="text" 
                id="comment" 
                placeholder="comment"
                onChange={handleChange}
            />       
        </div>
        <div>
            <label htmlFor="anonymous">anonymous:</label>
            <input 
                type="boolean" 
                id="anonymous" 
                placeholder="anonymous"
                onChange={handleChange}
            />       
        </div>
      <button 
            type="submit" 
            onClick={handleSubmit}>
                submit pledge!
        </button>   
    </form>  
    );
};
export default NewPledgeForm;