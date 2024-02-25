async function postProject(title, description, goal, image, is_open, date_close) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    console.log(url)
    const token = window.localStorage.getItem("token");
    console.log(token);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            "title": title,
            "description": description,
            "goal": goal,
            "image": image,
            "is_open": is_open,
            "date_close": date_close,
        }),
    });
    if (!response.ok){
        const fallbackError = "Error trying to post project";
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
};
export default postProject;