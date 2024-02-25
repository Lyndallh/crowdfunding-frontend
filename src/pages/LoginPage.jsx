import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

function LoginPage(){
    return (
    <div>
        <LoginForm />
        OR 
        <p>
        <Link to="/signup">Sign Up Here</Link>
        </p>

    </div>
    )
    ;
}
export default LoginPage;