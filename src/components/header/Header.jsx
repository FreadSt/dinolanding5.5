import logo from "../../assets/images/logo.png";
import notebook from "../../assets/images/Laptop.png";
import mark from "../../assets/images/DinoStamp.svg"
import subscribed from '../../assets/images/CheckSquare.png';
import close from '../../assets/images/Close Circle.png';
import ua from "../../assets/images/ua.png";
import './style.scss';
import {useState,useRef} from "react";
import emailjs from "emailjs-com";
import styled, {keyframes} from "styled-components";
import {fadeInUpBig} from "react-animations";
const fadeAnimation = keyframes`${fadeInUpBig}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isError, setError] = useState(null)
    const [email, setEmail] = useState('');
    const [testEmail, setTestEmail] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [isValidEmail, setIsValidEmail] = useState(false)
    const [isActiveButton, setIsActiveButton] = useState(false)

    const isMobile = window.matchMedia("(max-width: 430px)").matches

    function validEmail(testEmail) {
        return /\S+@\S+\.\S+/.test(testEmail);
    }

    const handleChange = event => {
        setEmail(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        setError(null);
        if (validEmail(email)) {
            console.log('The email is valid');
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
        } else {
            setError('Email is invalid');
        }
    };
    const handleActiveButton = () => {
        setIsActiveButton(true)
    }
    const form = useRef()
    const handleToggle = () => {
        setIsOpen((isOpen) => !isOpen)
        {/*window.scrollTo(0,document.body.scrollHeight); scroll to bottom anchor

        window.addEventListener('load', setup);

    const get = document.getElementById.bind(document);
    const query = document.querySelector.bind(document);

    function setup() {

        let modalRoot = get('modal-root');
        let button = get('modal-opener');
        let modal = query('.modal-window');

        modalRoot.addEventListener('click', rootClick);
        button.addEventListener('click', openModal);
        modal.addEventListener('click', modalClick);

        function rootClick() {
            modalRoot.classList.remove('visible');
        }

        function openModal() {
            modalRoot.classList.add('visible');
        }

        function modalClick(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
        */}
    }
    return(
        <div className={'header-container'}>
            <header>
                <div className={'logo-box'}>
                    <img src={logo} alt={'header-logo'}/>
                    <div className={'vl'}/>
                    <span>Made with love in Ukraine <img className={'desktop'} src={ua} alt={'ua'}/></span>
                    <img className={'mobile-flag'} src={ua} alt={'ua'}/>
                </div>
                <button onClick={handleToggle} className={isMobile ? "btn-hidden" : 'btn'} id='modal-opener'>
                    <div>Join the waitlist</div>
                </button>
            </header>
            <div className={'header-body'}>
                <div className={'body-text'}>
                    <h3>Tired of Monkey Business?</h3>
                    <h1>Evolve Your
                        Email Marketing
                        with Dinomail!</h1>
                </div>
                <button onClick={handleToggle} className={!isMobile ? "btn-hidden" : 'btn'} id='modal-opener'>
                    <div>Join the waitlist</div>
                </button>
                <img src={mark} alt={"watermark"}/>

            </div>
            <img
                src={notebook}
                className={'header-mac'}
                alt={'note'}
            />
            {
                isOpen ?
                    <div className={'modal-container'}>
                        <div className={'modal-window'}>
                            <img src={close} alt={'close'} className={'close-icon'} onClick={handleToggle}/>
                            <h5>Join Dinomail's waitlist now
                                and be at the forefront of innovation!</h5>
                            <h2>Embrace the Future
                                of Email Marketing</h2>
                            <form className={'form-wrapper'} ref={form} onSubmit={handleSubmit}>
                                <input
                                    placeholder={'Enter your email'}
                                    name={"user_email"}
                                    value={email}
                                    onChange={handleChange}
                                    onClick={handleActiveButton}
                                    type={'text'}
                                    className={isError !== null ? "invalid-input" : "valid-input"}
                                />
                                <button type={'submit'}>
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
                    </div>
                    :
                    null

            }
        </div>
    )
}