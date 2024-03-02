import {useState, useEffect} from 'react';
import getUsers from "../api/get-users";

export default function useUsers() {
//using the state hook to create a state varialbe called users and a function to update it called setUsers. 
// We initialize the state to an empty array.
    const [userID, setUserID] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    
    useEffect(() => {
        getUsers()
        .then((users) => {
            setUserID(users.userID);
            setUsername(users.username); 
            console.log("users:", users.userID)   
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    }, []);
    return {userID, username, isLoading, error};
}
// The useUsers hook is a custom hook that fetches the users from the API and returns the users, loading state, and error state.
// this can be used to display the user in more detail throughout the project