import NewProjectForm from '../components/NewProjectForm';
import { useAuth } from '../hooks/use-auth';

function NewProjectPage() {
    const { auth } = useAuth();
    return (
        <div>
        <h1>New Project</h1>
        <NewProjectForm />
        </div>
    );
    }

export default NewProjectPage;

