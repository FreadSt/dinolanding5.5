import './style.scss';
import {
        TAGS,
        TAGS_SECOND,
        TAGS_THIRD,
        TAGS_FOURTH,
        UPPER_CARDS,
        MIDDLE_CARDS,
        AnalystContainer,
        LOWER_ADVANATGES_CARDS,
        CompanionContainer,
    } from "../../constants/index";
import React, {useEffect} from "react";
import dinomail from "../../assets/images/icons/dinomail.svg";
import note from "../../assets/images/macAir.png";
import smartLoad from "../../assets/images/icons/loadbalancing.svg";
import ai from "../../assets/images/AIassistant.jpg"
import aiIcon from "../../assets/images/icons/Ai.svg";
import star from "../../assets/images/star.svg";
import limiting from "../../assets/images/limiting.svg";
import costly from "../../assets/images/costly.svg";
import Marquee from "react-fast-marquee";
import ScrollAnimations from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const Body = () => {
    const isMobile = window.matchMedia("(max-width: 430px)").matches
    useEffect(() => {
    },[isMobile])
    const getUpperCards = () => {
        return UPPER_CARDS.map((item,i) => {
            return(
                <ScrollAnimations
                    delay={item.delay}
                    animateIn={"animate__slideInUp"}
                    animateOnce={true}
                    duration={0.9}
                    style={!isMobile ? {height:'250px'} : null}
                    offset={50}
                >
                    <div
                        key={i}
                        className={'card'}
                        style={{background:item.color}}
                    >
                        <img src={item.img} alt={'uppercard-img'} className={'card-img'}/>
                        <img src={item.icon} alt={'uppercard-icon'} className={'card-icon'}/>
                        <h5>{item.title}</h5>
                        <p>{item.des}</p>
                    </div>
                </ScrollAnimations>
            )
        })
    }
    const getTags = () => {
        return TAGS.map((item,i) => {
            return(
                    <div key={i} className={'tag'}>
                        <img src={item.icon} alt={'tagImg'}/>
                        <div className={'tag-des'}>{item.des}</div>
                    </div>
            )
        })
    }
    const getTagsSecond = () => {
        return TAGS_SECOND.map((item,i) => {
            return(
                <div key={i} className={'tag'}>
                    <img src={item.icon} alt={'tagImg'}/>
                    <div className={'tag-des'}>{item.des}</div>
                </div>
            )
        })
    }
    const getTagsThird = () => {
        return TAGS_THIRD.map((item,i) => {
            return(
                <div key={i} className={'tag'}>
                    <img src={item.icon} alt={'tagImg'}/>
                    <div className={'tag-des'}>{item.des}</div>
                </div>
            )
        })
    }
    const getTagsFourth = () => {
        return TAGS_FOURTH.map((item,i) => {
            return(
                <div key={i} className={'tag'}>
                    <img src={item.icon} alt={'tagImg'}/>
                    <div className={'tag-des'}>{item.des}</div>
                </div>
            )
        })
    }
    const getMiddleCards = () => {
        return MIDDLE_CARDS.map((item,i) => {
            return(

                    <div className={'mid-card'}>
                        <img src={item.img} className={'small-img'}/>
                        <img src={item.icon} alt={'mid-icon'}/>
                        <div className={'card-title'}>{item.title}</div>
                    </div>
            )
        })
    }

    const getUpperAdvantagesCards = () => {
        return(
            <div className={'adv-cards'}>
                <div className={'adv-wrapper'}>
                    <ScrollAnimations
                        delay={200}
                        animateIn={"animate__slideInUp"}
                        animateOnce={true}
                        duration={0.9}
                        style={!isMobile ? {height:'250px'} : null}
                    >
                        <div className={'smart-load'}>
                            <img src={note} className={'note-img'} alt={'noteImg'}/>
                            <div className={'inner-content'}>
                                <img src={smartLoad} className={'icon'} alt={'smartLoad-icon'}/>
                                <h5>Smart Load Balancing</h5>
                                <p>Unveil valuable insights, optimize performance, and secure the best price – all on your timeline!</p>
                            </div>
                        </div>
                    </ScrollAnimations>
                    <ScrollAnimations
                        delay={300}
                        animateIn={"animate__slideInUp"}
                        animateOnce={true}
                        duration={0.9}
                        style={!isMobile ? {height:'250px'} : null}
                    >
                        <div className={'Ai-assistant'}>
                            <img src={ai} className={'card-img'} alt={'ai-img'}/>
                            <div className={'inner-content'}>
                                <img src={aiIcon} className={'icon'} alt={'ai-icon'}/>
                                <h5>AI Assistant</h5>
                                <p>Maximize your efficiency with the AI Assistant: write emails, segment your audience, work with stats, or just ask for an advice</p>
                            </div>
                        </div>
                    </ScrollAnimations>
                </div>
            </div>
        )
    }

    const getLowerAdvantagesCards = () => {
        return LOWER_ADVANATGES_CARDS.map((item,i) => {
            return(
                    <div className={'lower-adv-wrapper'}>
                        <ScrollAnimations
                            delay={item.delay}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            offset={2}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <div className={'adv-card'}>
                                <img src={item.img} alt={'lowerAdv-card'} className={'lowerAdv-img'}/>
                                <div className={'inner-content'}>
                                    <img src={item.icon} alt={'lowerAdv-icon'}/>
                                    <h5>{item.title}</h5>
                                    <p>{item.des}</p>
                                </div>
                            </div>
                        </ScrollAnimations>
                    </div>
            )
        })
    }
    return(
        <div className={'body-container'}>
            <div className={'poster-animated'}>
                <ScrollAnimations
                    delay={200}
                    animateIn={"animate__slideInUp"}
                    animateOnce={true}
                    duration={0.9}
                    style={!isMobile ? {height:'250px'} : null}
                >
                    <div className={'poster-box'}>
                        <div className={'poster'}>
                            <p>First email marketing service </p>
                            <h1>Embracing the <b>Cryptocurrency</b> Revolution</h1>
                        </div>
                    </div>
                </ScrollAnimations>
            </div>
            <div className={'upper-cards'}>
                {getUpperCards()}
            </div>
                <div className={'middle-block'}>
                    <div className={'animate-wrapper'}>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <div className={'middle-poster'}>
                                <h5>Fully equipped for successful campaigns</h5>
                                <h1>Superior Functionality
                                    at a <b>Fraction of the Cost</b></h1>
                                <span>The following section contains some of the answers to the survey we've done and IS NOT heading to offend or discredit anybody</span>
                            </div>
                        </ScrollAnimations>
                    </div>
                    <div className={'tag-animated'}>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <div className={'tag-container'}>
                                <h1>Email Marketing Features Tailored
                                    for <b>Seamless Experience</b></h1>
                                <div className={'tags'}>
                                    <Marquee
                                        autoFill={true}
                                        speed={40}
                                    >
                                        { getTags()}
                                    </Marquee>
                                    <Marquee
                                        autoFill={true}
                                        speed={45}
                                    >
                                        { getTagsSecond()}
                                    </Marquee>
                                    <Marquee
                                        autoFill={true}
                                        speed={35}
                                    >
                                        { getTagsThird()}
                                    </Marquee>
                                    <Marquee
                                        autoFill={true}
                                        speed={38}
                                    >
                                        { getTagsFourth()}
                                    </Marquee>
                                </div>
                            </div>
                        </ScrollAnimations>
                    </div>
                    <div className={'services'}>
                        <div className={'small-wrapper'}>
                            <ScrollAnimations
                                delay={200}
                                animateIn={"animate__slideInUp"}
                                animateOnce={true}
                                duration={0.9}
                                style={!isMobile ? {height:'250px'} : null}
                            >
                                <div className={'small-cards'}>
                                    {getMiddleCards()}
                                </div>
                            </ScrollAnimations>
                        </div>
                        <div className={'large-wrapper'}>
                            <ScrollAnimations
                                delay={300}
                                animateIn={"animate__slideInUp"}
                                animateOnce={true}
                                duration={0.9}
                                style={!isMobile ? {height:'250px'} : null}
                            >
                                <div className={'large-card'}>
                                    <img src={star} className={'large-img'}/>
                                    <img src={dinomail} alt={'mid-dino'}/>
                                    <div>Speedy, affordable and intelligent
                                        email marketing solution</div>
                                </div>
                            </ScrollAnimations>
                        </div>
                    </div>
                </div>
                <div className={'lower-block'}>
                    <div className={'lower-wrapper'}>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <div className={'lower-poster'}>
                                <h5>Facilitate your workflow with</h5>
                                <h1><b>The Ultimate</b></h1>
                                <h1>Email Marketing</h1>
                                <h1>Toolset</h1>
                            </div>
                        </ScrollAnimations>
                    </div>
                    <div className={'cards'}>
                        {getUpperAdvantagesCards()}
                    </div>
                    <div className={'analyst-wrapper'}>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <AnalystContainer/>
                        </ScrollAnimations>
                    </div>
                    <div className={'lower-cards'}>
                        {getLowerAdvantagesCards()}
                    </div>
                    <div className={'companion-wrapper'}>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__slideInUp"}
                            animateOnce={true}
                            duration={0.9}
                            style={!isMobile ? {height:'250px'} : null}
                        >
                            <CompanionContainer/>
                        </ScrollAnimations>
                    </div>
                </div>
        </div>
    )
}