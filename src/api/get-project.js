async function getProject(projectId) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectId}/`;
    const response = await fetch(url,{method:"GET"});
    console.log(url, response)
    if (!response.ok) {
        const fallbackError = `Error fetching project with id ${projectId} from ${url}`;
        const data = await response.json().catch(() => {
        throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
}

export default getProject;