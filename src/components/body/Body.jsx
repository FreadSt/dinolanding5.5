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
import React from "react";
import dinomail from "../../assets/images/icons/dinomail.svg";
import note from "../../assets/images/macAirM2.png";
import smartLoad from "../../assets/images/icons/loadbalancing.svg";
import ai from "../../assets/images/AIassistant.jpg"
import aiIcon from "../../assets/images/icons/Ai.svg";
import Marquee from "react-fast-marquee";
import ScrollAnimations from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const Body = () => {
    const getUpperCards = () => {
        return UPPER_CARDS.map((item,i) => {
            return(
                <ScrollAnimations
                    delay={item.delay}
                    animateIn={"animate__fadeInUp"}
                    animateOnce={true}
                    duration={0.9}
                    offset={10}
                    style={{height:'100%'}}
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
                <ScrollAnimations
                    delay={item.delay}
                    animateIn={"animate__fadeInUp"}
                    animateOnce={true}
                    duration={0.9}
                    offset={10}
                    style={{height:'100%'}}
                >
                    <div className={'mid-card'}>
                        <img src={item.icon} alt={'mid-icon'}/>
                        <div className={'card-title'}>{item.title}</div>
                    </div>
                </ScrollAnimations>
            )
        })
    }

    const getUpperAdvantagesCards = () => {
        return(
            <div className={'adv-cards'}>
                <ScrollAnimations
                    delay={200}
                    animateIn={"animate__fadeInUp"}
                    animateOnce={true}
                    duration={0.9}
                    offset={2}
                    style={{height:'100%'}}
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
                    animateIn={"animate__fadeInUp"}
                    animateOnce={true}
                    duration={0.9}
                    offset={2}
                    style={{height:'100%'}}
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
        )
    }

    const getLowerAdvantagesCards = () => {
        return LOWER_ADVANATGES_CARDS.map((item,i) => {
            return(
                <ScrollAnimations
                    delay={300}
                    animateIn={"animate__fadeInUp"}
                    animateOnce={true}
                    duration={0.9}
                    offset={2}
                    style={{height:'100%'}}
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
            )
        })
    }
    return(
        <div className={'body-container'}>
                <div className={'poster-box'}>
                    <div className={'poster'}>
                        <p>First email marketing service </p>
                        <h1>Embracing the <b>Cryptocurrency</b> Revolution</h1>
                    </div>
                </div>
                <div className={'upper-cards'}>
                    {getUpperCards()}
                </div>
                <div className={'middle-block'}>
                    <div className={'middle-poster'}>
                        <h5>Fully equipped for successful campaigns</h5>
                        <h1>Superior Functionality
                            at a <b>Fraction of the Cost</b></h1>
                        <span>The following section contains some of the answers to the survey we've done and IS NOT heading to offend or discredit anybody</span>
                    </div>
                    <div className={'tag-container'}>
                        <h1>Essential Email Marketing Features User-Friendly Tailored for Seamless Experience</h1>
                        <div className={'tags'}>
                            <Marquee
                                autoFill={true}
                                speed={100}
                            >
                                { getTags()}
                            </Marquee>
                            <Marquee
                                direction={"right"}
                                autoFill={true}
                                speed={80}
                            >
                                { getTagsSecond()}
                            </Marquee>
                            <Marquee
                                autoFill={true}
                                speed={40}
                            >
                                { getTagsThird()}
                            </Marquee>
                            <Marquee
                                direction={"right"}
                                autoFill={true}
                                speed={70}
                            >
                                { getTagsFourth()}
                            </Marquee>
                        </div>
                    </div>
                    <div className={'services'}>
                        <div className={'small-cards'}>
                            {getMiddleCards()}
                        </div>
                        <ScrollAnimations
                            delay={200}
                            animateIn={"animate__fadeInUp"}
                            animateOnce={true}
                            duration={0.9}
                            offset={10}
                            style={{height:'100%'}}
                        >
                            <div className={'large-card'}>
                                <img src={dinomail} alt={'mid-dino'}/>
                                <div>Speedy, affordable and intelligent
                                    email marketing solution</div>
                            </div>
                        </ScrollAnimations>
                    </div>
                </div>
                <div className={'lower-block'}>
                    <div className={'lower-poster'}>
                        <h5>Facilitate your workflow with</h5>
                        <h1><b>The Ultimate</b></h1>
                        <h1>Email Marketing</h1>
                        <h1>Toolset</h1>
                    </div>
                    <div className={'cards'}>
                        {getUpperAdvantagesCards()}
                    </div>
                    <AnalystContainer/>
                    <div className={'lower-cards'}>
                        {getLowerAdvantagesCards()}
                    </div>
                    <CompanionContainer/>
                </div>
        </div>
    )
}