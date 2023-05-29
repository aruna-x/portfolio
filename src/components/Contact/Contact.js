import { useState } from 'react';
import styled from 'styled-components';

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
                <SocialImg src={src} alt={alt} id={id}/>
            </a>
        )
    }

    return (
        <StyledContact id="contact">
            <ContactWrapper>
                <h2>Contact</h2>
                <SocialIcons>
                    <SocialLink url="https://www.linkedin.com/in/aruna-x/" src="/portfolio/images/linkedin.png" alt="LinkedIn icon"/>
                    <SocialLink url="https://github.com/aruna-x" src="/portfolio/images/github.png" alt="Github icon"/>
                    <SocialLink url="https://dev.to/aruna" src="/portfolio/images/dev.png" alt="Dev.to icon" id="dev"/>
                </SocialIcons>

                <Form>
                    <Input id="name" type="name" placeholder="Name" dataType="from_name" formData={formData} setFormData={setFormData}/>
                    <Input id="email" type="email" placeholder="Email" dataType="from_email" formData={formData} setFormData={setFormData}/>
                    <Input id="message" type="message" placeholder="Message" rows={7} dataType="message" formData={formData} setFormData={setFormData} inputType="textarea"/>

                    <SubmitButton type="submit" onClick={(e) => handleSubmit(e, formData, setFormData)}>Submit</SubmitButton>
                </Form>
            </ContactWrapper>
        </StyledContact>
    );
}

export default Contact;

const StyledContact = styled.div`
    background-color: rgba(24,24,24);
    color: white;
    margin-top: 120px;
    padding-top: 80px;
    padding-bottom: 120px;

    @media only screen and (max-width: 650px) {
        padding-bottom: 80px;

        & > h2 {
            text-align: center;
        }
    }
`;

const ContactWrapper = styled.div`
    max-width: 500px;
    margin: auto auto;
    text-align: center;
`;
  
const SocialIcons = styled.div`
    text-align: center;
    margin: -30px 0px 50px 0px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
`;
  
const SocialImg = styled.img`
    height: 60px;
    margin: 0 10px;
    
    &:hover {
        transform: scale(1.07) perspective(1px);
        cursor: pointer;
        filter: sepia(100%) hue-rotate(40deg) brightness(55%) saturate(1200%);
    }

    &#dev {
        border-radius: 10px;
        height: 50px;
    }
`;

const Form = styled.form`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
`;
  
const SubmitButton = styled.button`
    width: 70%;
    margin: 30px auto;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    color: black;
`;
