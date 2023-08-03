import './style.scss';
import logo from "../../assets/images/logo.png";
import ua from "../../assets/images/ua.png";
import twitter from '../../assets/images/icons/twittericon.svg';
import linked from '../../assets/images/icons/linked.svg';
import {useEffect, useRef, useState} from "react";
import emailjs from "emailjs-com";
import { fadeInUpBig } from 'react-animations';
import subscribed from '../../assets/images/CheckSquare.png';
import ScrollAnimations from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import styled, { keyframes } from 'styled-components';

const fadeAnimation = keyframes`${fadeInUpBig}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

export const Footer = () => {
    const [email, setEmail] = useState({value:"", error:""})
    const [isError, setError] = useState(null)
    const [testEmail, setTestEmail] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isActiveButton, setIsActiveButton] = useState(false)

    function validEmail(testEmail) {
        return /\S+@\S+\.\S+/.test(testEmail);
    }

    const handleChange = event => {
        if (!validEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setTestEmail(event.target.value);
        setIsFilled(true)
    };
    const handleActiveButton = () => {
        setIsActiveButton(true)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_kkivfyh",
            "template_5w5jbvj",
            form.current,
            "Du4ndx5_uUnR-dcNy"
        )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setIsSubmit(true)
    };
    const form = useRef()
    const handleSubmit = (event) => {
        event.preventDefault()
        let isError = false
        if(!/\S+@\S+\.\S+/.test(email.value)){
            setIsValidEmail(true)
            setEmail((current) => ({value: current.value, error: "Correct mistakes and try again"}) )
        }
        if(!email.value){
            setEmail({value:"", error: "Correct mistakes and try again"})
            isError = true;
            setIsValidEmail(false)
        }
        if(!isError){
            setEmail({value:"", error:""})
            setIsValidEmail(true)
        }
    }

    return(
        <div className={'footer-container'}>
            <div className={'footer-poster'}>
                <div className={'text-box'}>
                    <h5>Join Dinomail's waitlist now
                        and be at the forefront of innovation!</h5>
                    <h1>Embrace the Future
                        of Email Marketing</h1>
                </div>
                <form className={'form-wrapper'} ref={form} onSubmit={handleSubmit}>
                    <input
                        placeholder={'Enter your email'}
                        name={"user_email"}
                        value={testEmail}
                        onChange={handleChange}
                        onClick={handleActiveButton}
                        type={'text'}
                        className={isError === null  ? "valid-input" : "invalid-input"}
                    />
                    <button onClick={sendEmail} disabled={isError || !isFilled}>
                        <div>Join the waitlist</div>
                    </button>
                </form>
            </div>
            {
                isSubmit && !isError && isFilled ?
                    <FadeDiv>
                        <div className={'popuptest'}>
                            <img src={subscribed} alt={"subscribed"}/>
                            <span>You’ve successfully subscribed</span>
                        </div>
                    </FadeDiv>
                    :null
            }
            <div className={'contact-box'}>
                <div className={'logo-terms-box'}>
                    <div className={'logo-box'}>
                        <img src={logo} alt={'header-logo'}/>
                        <div className={'vl'}/>
                        <span>Made with love in Ukraine <img src={ua} alt={'ua'}/></span>
                    </div>
                    <div className={'terms-container'}>
                        <span>Dinomail © 2023 All Rights Reserved</span>
                        <span className={'terms'}>Terms & Policies</span>
                    </div>
                </div>
                <div className={'socials'}>
                    <img src={twitter} className={'twitter'} alt={'twitter'}/>
                    <img src={linked} alt={'linked'}/>
                </div>
            </div>
        </div>
    )
}