async function postContact(yourname, subject, interest, email) {

    const url = `https://formspree.io/f/mrgwryge`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
        },
        body: JSON.stringify({
            yourname: yourname,
            subject: subject,
            interest: interest,
            email: email
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
export default postContact;