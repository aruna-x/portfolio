import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })

    function handleChange(type, e) {
        setFormData({...formData, [type]: e.target.value});
    }

    function validateEmail(email) {
        let match = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return match ? email === match[0] : false;
    };

    function handleSubmit(e) {
        e.preventDefault();

        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        
        const emailValid = validateEmail(formData.from_email);

        function clearFormErrors(){
            name.style.border = '1px solid gray';
            email.style.border = '1px solid gray';
            message.style.border = '1px solid gray';
        }

        if(!formData.from_name || !formData.from_email || !formData.message){
            clearFormErrors();
            if(!formData.from_name){
                name.style.border = '1px solid red';
            }
            if(!formData.from_email){
                email.style.border = '1px solid red';
            }
            if(!formData.message){
                message.style.border = '1px solid red';
            }
        }
        if(!emailValid){
            email.style.border = '1px solid red';
        }
        if(formData.from_name && formData.from_email && formData.message && emailValid) {
            clearFormErrors();
            emailjs.send('porfolio_contact_form', 'portfolio_message', formData, process.env.REACT_APP_USER_ID)
                .then((result) => {
                    if (result.text){
                        setFormData({
                            from_name: "",
                            from_email: "", 
                            message: "SUCCESS! Thanks for your message :) Be in touch soon."
                        });
                    }
                }, (error) => {
                    console.log(error.text);
            });
        }
    }

    return (
        <div id="contact">
            <div id="contact-wrapper">
                <h2>Contact</h2>
                <div id="social-icons" className="flex-row">
                    <a href="https://www.linkedin.com/in/aruna-x/">
                        <img src="/portfolio/images/linkedin.png" alt="LinkedIn icon" className="social-img"/>
                    </a>
                    <a href="https://github.com/aruna-x">
                        <img src="/portfolio/images/github.png" alt="Github icon" className="social-img"/>
                    </a>
                    <a href="https://dev.to/aruna">
                        <img src="/portfolio/images/dev.png" alt="Dev.to icon" id="dev" className="social-img"/>
                    </a>
                </div>

                <form ref={form} className="flex-column" id="form">
                    <label hidden>Name</label>
                    <input
                        id="name"
                        type="name" 
                        placeholder="Name" 
                        className="textarea" 
                        rows={1} 
                        value={formData.from_name} 
                        onChange={(e)=> handleChange("from_name",e)} 
                        required
                    />

                    <label hidden>Email</label>
                    <input 
                        id="email"
                        type="email" 
                        placeholder="Email" 
                        className="textarea" 
                        rows={1} 
                        value={formData.from_email} 
                        onChange={(e)=> handleChange("from_email",e)} 
                        required
                    />

                    <label hidden>Message</label>
                    <textarea 
                        id="message"
                        placeholder="Message" 
                        className="textarea" 
                        rows={7} 
                        value={formData.message} 
                        onChange={(e)=> handleChange("message",e)} 
                    />

                    <button id="submit" type="submit" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
    );
}

export default Contact;