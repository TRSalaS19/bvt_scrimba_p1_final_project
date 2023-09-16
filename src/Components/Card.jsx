import React from 'react';
import CardImg from './CardImg';
import HeaderInfo from './HeadingInfo';
import Buttons from './Buttons';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

export default function Card() {
    return(
        <div className='card_container'>
            <CardImg />
            <HeaderInfo />
            <Buttons />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}