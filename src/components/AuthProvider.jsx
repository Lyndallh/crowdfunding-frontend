import { createContext,  useState} from "react";  

export const AuthContext = createContext(); // create a context object
export const AuthProvider = (props) =>{
    const [auth, setAuth] = useState({
        token: window.localStorage.getItem("token"),
    });
    
    console.log("auth token", auth.token);
return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {props.children}
    </AuthContext.Provider>
);
};
