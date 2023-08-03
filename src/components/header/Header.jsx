import logo from "../../assets/images/logo.png";
import notebook from "../../assets/images/note.png";
import mark from "../../assets/images/DinoStamp.svg"
import ua from "../../assets/images/ua.png";
import './style.scss';
import {useState} from "react";

export const Header = () => {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(true)
        window.scrollTo(0,document.body.scrollHeight);
    }
    return(
        <div className={'header-container'}>
            <header>
                <div className={'logo-box'}>
                    <img src={logo} alt={'header-logo'}/>
                    <div className={'vl'}/>
                    <span>Made with love in Ukraine <img src={ua} alt={'ua'}/></span>
                </div>
                <button onClick={handleClick} className={'join-btn'}>
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
                <img src={mark} alt={"watermark"}/>
            </div>
            <img
                src={notebook}
                className={'header-mac'}
                alt={'note'}
            />
        </div>
    )
}