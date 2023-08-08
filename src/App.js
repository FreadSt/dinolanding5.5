import './App.scss';
import {Header} from "./components/header/Header";
import {Body} from "./components/body/Body";
import {Footer} from "./components/footer/Footer";
import {useState, useEffect} from "react";
import React from "react";

function App() {
    const isMobile = window.matchMedia("(max-width: 430px)").matches
    console.log(isMobile, "mobile")

    const bgSize1 = isMobile ? 600 : 950
    const bgSize2 = isMobile ? 2100 : 2290
    const bgSize3 = isMobile ? 4100 : 3800
    const bgSize4 = isMobile ? 6900 : 7000

    var body = document.getElementsByTagName('html')[0];
    body.style.background = "#7E9D00";
    body.style.backgroundSize = 'contain';
    body.style.transition = 'background-image 1s';
    /*#EDB833 #FAFAFA #2A2B3B*/
    useEffect(() => {
        const onScroll = () => {
            let scroll = window.pageYOffset;
            if (scroll < bgSize1) {
                body.style.background = "#7E9D00";
                body.style.backgroundSize = 'contain';
                body.style.transition = '.5s';
            } else if (scroll >= bgSize1 && scroll < bgSize2) {
                body.style.background = '#FAFAFA';
                body.style.backgroundSize = 'contain';
                body.style.transition = '.5s';
            } else if (scroll >= bgSize2 && scroll < bgSize3) {
                body.style.background = '#EDB833';
                body.style.backgroundSize = 'contain';
                body.style.transition = '.5s';
            } else if (scroll >= bgSize3 && scroll < bgSize4) {
                body.style.background = '#FAFAFA';
                body.style.backgroundSize = 'contain';
                body.style.transition = '.5s';
            } else if (scroll >= bgSize4 && scroll < 10400) {
                body.style.background =/*`url(${footerBG})center repeat-y`*/ '#2A2B3B';
                body.style.backgroundSize = 'contain';
                body.style.transition = /*'background-image  1s'*/ '.5s';
            }
        }
        window.addEventListener('scroll', onScroll, {passive:true})
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    const loader = document.querySelector(".holder");
    console.log(loader, 'pre Loader')
    const showLoader = () => loader.classList.remove("holder");
    const addClass = () => loader.classList.add("holder-hide");

    useEffect(() => {
        window.addEventListener('load', addClass);
        return () => window.removeEventListener('load', addClass);
    },[])
  return (
    <div className="App">
        <Header/>
        <Body/>
        <Footer/>
    </div>
  );
}

export default App;
