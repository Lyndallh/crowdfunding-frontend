import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("mrgwryge");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
return (
    <section id = "contact">       
    <div id ="contact-box">
        <h1>Would you like to connect?</h1>
        <form onSubmit={handleSubmit} id = "form" action="https://formspree.io/f/mrgwryge" method="POST">
            <table id = "table">
                <tr>
                    <th className = "table-header">      
                        <label for="yourname">Name</label>    
                    </th> 
                    
                    <th className = "table-header">     
                        <label for="subject">How can I help you?</label>
                    </th> 
                </tr>
                <tr>
                    
                    <td  className = "table-input-cell">  
                        <input type="text" id="yourname" name="yourname" className = "response"/> 
                    </td> 
                    
                    <td id = "subject" rowspan="5" className = "table-input-cell"> 
                        <textarea id="textarea" name="subject" rows = "9"></textarea>    
                    </td>   
                </tr>
                <tr>
                    <th className = "table-header">    
                        <label for="interest">What has piqued your interest?</label>
                    </th>
                </tr>
                <tr>
                    <td className = "table-input-cell">  
                        <select id="interest" name="interest" className = "response"> 
                            <option value="blank"></option>
                            <option value="analytics">Analytics</option>
                            <option value="bikes">Bikes</option>
                            <option value="coding">Coding</option>
                            <option value="other">Other</option>                      
                        </select>
                    </td>
                </tr>
                    <th className = "table-header">    
                        <label for="email">Your Email</label>   
                    </th>
                <tr>
                    <td  className = "table-input-cell">  
                        <input type="text" id="yourname" name="yourname" className = "response"/> 
                    </td> 
                </tr>
            </table>
            <button type="submit"> Submit </button> 
        </form>
    </div>
    <div id="constraints"></div>    
</section>         

    );
}
export default ContactForm;