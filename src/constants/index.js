import crypto from "../assets/images/crypto.svg";
import dogee from "../assets/images/dogee.svg";
import web3 from "../assets/images/web3.svg";
import webicon from "../assets/images/web3icon.svg";

import limiting from "../assets/images/limiting.svg";
import costly from "../assets/images/costly.svg";
import service from "../assets/images/icons/service.svg";
import mailchimp from "../assets/images/icons/mailchimp.svg";

import analyst from "../assets/images/analystNote.jpg";
import campaignAnalyst from "../assets/images/icons/analyst.svg";

import emailbuilderImg from "../assets/images/builder.jpg";
import iconbuilder from "../assets/images/icons/builderemail.svg";

import brandImg from "../assets/images/brand.jpg";
import brandIcon from "../assets/images/icons/brandbook.svg";

import mobCompanion from "../assets/images/phone.svg";
import companionIcon from "../assets/images/icons/companion.svg";

import plain from "../assets/images/icons/Plain 3.svg"
import builder from "../assets/images/icons/Widget Add.svg";
import code from "../assets/images/icons/Code Square.svg";
import paint from "../assets/images/icons/Paint Roller.svg";
import tag from "../assets/images/icons/Tag.svg";
import testing from "../assets/images/icons/Mirror Left.svg";

import pie from "../assets/images/icons/Pie Chart 2.svg";
import addSquare from "../assets/images/icons/Add Square.svg";
import palette from "../assets/images/icons/Palette.svg";
import circle from "../assets/images/icons/Star Circle.svg";
import squares from "../assets/images/icons/Three Squares.svg";

import users from "../assets/images/icons/Users Group Two Rounded.svg";
import list from "../assets/images/icons/Checklist Minimalistic.svg";
import dollar from "../assets/images/icons/Dollar.svg";
import radial from "../assets/images/icons/Radial Blur.svg";

import clock from "../assets/images/icons/Clock Square.svg";
import routing from "../assets/images/icons/Routing 3.svg";
import smartphone from "../assets/images/icons/Smartphone Update.svg";
import signpost from "../assets/images/icons/Signpost.svg";



export const UPPER_CARDS = [
    {
        img:crypto,
        icon:dogee,
        title:'Crypto-Friendly Payments',
        des: 'Use Bitcoin, Ethereum, USDT, USDC, or your preferred stablecoins to pay for our services!',
        color:"#D36700",
        delay:200,
    },
    {
        img:web3,
        icon:webicon,
        title:'Web3 Expression Freedom',
        des: 'Run crypto / web3 projects or leverage crypto fund raising without fear of suspension.',
        color: "#666DA5",
        delay:300,
    },
]

export const TAGS = [
    {icon:plain, des:"Campaigns"},
    {icon:builder, des:"Email Builder"},
    {icon:code, des:"HTML Upload"},
    {icon:paint, des:"Email Templates"},
    {icon:tag, des:"Tags"},
    {icon:testing, des:"A/B Testing"},
]

export const TAGS_SECOND = [
    {icon:pie, des:"Reports and Analytics"},
    {icon:addSquare, des:"Sign-Up Forms"},
    {icon:palette, des:"Dynamic Content"},
    {icon:circle, des:"AI Assistant"},
    {icon:squares, des:"Segmentation"},
]

export const TAGS_THIRD = [
    {icon:users, des:"Multiple users and roles"},
    {icon:list, des:"Email Scheduling"},
    {icon:dollar, des:"Transactional Emails"},
    {icon:radial, des:"Time Zone Sending"},
]

export const TAGS_FOURTH = [
    {icon:clock, des:"Send Time Optimization"},
    {icon:routing, des:"Customer Journeys"},
    {icon:smartphone, des:"Mobile Optimization Tools"},
    {icon:signpost, des:"Two-Factor Authentication"},
]

export const MIDDLE_CARDS = [
    {
        img:limiting,
        icon:service,
        title:'Too techy with limited support',
    },
    {
        img:costly,
        icon:mailchimp,
        title:'It’s all about the cost at the end of the day...',
    },
]

export const AnalystContainer = () => {
    return(
        <div className={'analyst-container'}>
            <div className={'content-box'}>
                <div className={'description-wrapper'}>
                    <img src={campaignAnalyst} alt={'campaign-icon'}/>
                    <h5>Campaign Analyst</h5>
                    <p>Monitor performance, measure success,
                        and make informed decisions with comprehensive dashboards</p>
                </div>
            </div>
            <img src={analyst} alt={'analyst-note'} className={'analystImg'}/>
        </div>
    )
}

export const LOWER_ADVANATGES_CARDS = [
    {
        delay: 200,
        img:emailbuilderImg,
        icon:iconbuilder,
        title:'Email Builder',
        des:"Craft stunning emails with drag-n-drop simplicity, unleashing your creativity and optimizing the design process with ease"
    },
    {
        delay: 300,
        img:brandImg,
        icon:brandIcon,
        title:'AI Assistant',
        des:"Maximize your efficiency with the AI Assistant: write emails, segment your audience, work with stats, or just ask for an advice"
    },
]

export const CompanionContainer = () => {
    return(
        <div className={'companion-container'}>
            <div className={'content-box'}>
                <div className={'description-wrapper'}>
                    <img src={companionIcon} alt={'companion-icon'}/>
                    <h5>Mobile companion app</h5>
                    <p>Access your email marketing on the go!
                        Enjoy essential features for seamless campaign management anytime, anywhere.</p>
                </div>
            </div>
            <img src={mobCompanion} alt={'companion-mobile'}/>
        </div>
    )
}
