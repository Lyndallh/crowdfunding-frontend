import { useState } from "react";
import postPledge from "../api/post-pledge";

import { useNavigate } from "react-router-dom"; // import the useNavigate hook
import { useAuth } from "../hooks/use-auth";


const initFormState = {
    amount: "",
    comment: "",
    anonymous: "",
}

function PledgeForm({ projectId }) {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const {auth, setAuth} = useAuth();
    console.log(auth);
    const[pledge, setPledge] = useState(initFormState);

const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
        ...prevPledge,
        [id]: value,
    }));
};

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("pledge handlesubmit called")
    setIsLoading(true);

    if (!pledge.amount || !pledge.comment || !pledge.anonymous) {
     console.log("missing required fields");
        console.log(pledge);

    } else if (auth.token) {
        console.log("auth token exists");
        console.log(pledge);
        try {
            await postPledge(
                pledge.amount,
                pledge.comment,
                pledge.anonymous,
                projectId,
                )
            setPledge(initFormState)
            setIsLoading(false);
            navigate(0);
        } catch (err) {
            setIsLoading(false);
            window.alert(err.message)
        }
    }
};


return (
    <form onSubmit={handleSubmit}>make a pledge
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
            type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "submit pledge!"}
        </button>   
    </form>  
    );
};
export default PledgeForm;