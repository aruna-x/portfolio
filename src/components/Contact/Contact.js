import { useState } from 'react';
import Input from './Input';
import handleSubmit from '../utils/functions';

function Contact() {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        message: ""
    })

    function SocialLink({url, src, alt, id}) {
        return (
            <a href={url}>
                <img src={src} alt={alt} className="social-img" id={id}/>
            </a>
        )
    }

    return (
        <div id="contact">
            <div id="contact-wrapper">
                <h2>Contact</h2>
                <div id="social-icons" className="flex-row">
                    <SocialLink url="https://www.linkedin.com/in/aruna-x/" src="/portfolio/images/linkedin.png" alt="LinkedIn icon"/>
                    <SocialLink url="https://github.com/aruna-x" src="/portfolio/images/github.png" alt="Github icon"/>
                    <SocialLink url="https://dev.to/aruna" src="/portfolio/images/dev.png" alt="Dev.to icon" id="dev"/>
                </div>

                <form className="flex-column" id="form">
                    <Input id="name" type="name" placeholder="Name" dataType="from_name" formData={formData} setFormData={setFormData}/>
                    <Input id="email" type="email" placeholder="Email" dataType="from_email" formData={formData} setFormData={setFormData}/>
                    <Input id="message" type="message" placeholder="Message" rows={7} dataType="message" formData={formData} setFormData={setFormData} inputType="textarea"/>

                    <button id="submit" type="submit" onClick={(e) => handleSubmit(e, formData, setFormData)}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
