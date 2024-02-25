async function postProject(title, description, goal, image, is_open, endDateTime) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "owner": 1, // hardcoding the owner for now, will fix later
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,
            "is_open": is_open,
            "endDateTime": endDateTime,
        }),
    });
    if (!response.ok){
        const fallbackError = "Error trying to signup";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
};
export default postProject;