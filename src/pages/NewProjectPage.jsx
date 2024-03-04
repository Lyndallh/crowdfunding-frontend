import NewProjectForm from '../components/Forms/NewProjectForm';
import { useAuth } from '../hooks/use-auth';

function NewProjectPage() {
    const { auth } = useAuth();
    return (
        <div>
        <NewProjectForm />
        </div>
    );
    }

export default NewProjectPage;

