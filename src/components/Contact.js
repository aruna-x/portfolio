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

    function changeBorderColor(input, color) {
        input.style.border = `1px solid ${color}`;
    }

    // returns: true if email valid, false if not, null if empty string
    function validateEmail(email) {
        let match = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return match ? email === match[0] : false;
    };

    function checkFormValidity(nameInput, emailInput, messageInput) {
        // clear red borders
        [nameInput, emailInput, messageInput].forEach(input => changeBorderColor(input, 'gray'));

        // check if inputs are valid
        const isValidName = Boolean(formData.from_name);
        const isValidEmail = Boolean(validateEmail(formData.from_email));
        const isValidMessage = Boolean(formData.message);

        // add red border to invalid inputs. Note: switch is not the best solution for this :)
        if (!isValidName) {
            changeBorderColor(nameInput, 'red');
        }
        if (!isValidEmail) {
            changeBorderColor(emailInput, 'red');
        }
        if (!isValidMessage) {
            changeBorderColor(messageInput, 'red');
        }

        return isValidName && isValidEmail && isValidMessage;

    }

    function handleSubmit(e) {
        e.preventDefault();

        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let messageInput = document.getElementById("message");

        const isFormValid = checkFormValidity(nameInput, emailInput, messageInput);

        if(isFormValid) {
            emailjs.send('portfolio_contact_form', 'portfolio_message', formData, process.env.REACT_APP_USER_ID)
                .then(r => {
                    if (r.text){
                        setFormData({
                            from_name: "",
                            from_email: "", 
                            message: "SUCCESS! Thanks for your message :) Be in touch soon."
                        });
                    }
                }, (error) => {
                    changeBorderColor(messageInput, 'red');
                    setFormData({
                        from_name: "",
                        from_email: "", 
                        message: "Oops! Something went wrong. Please try again or contact me directly via linkedin, github, or dev.to linked above."
                    });
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