//HOME PAGE

//IMPORTING
import React from 'react';
import Header from '../Header';
import SlideShow from "../SlideShow";
import About from "../About"
import Services from "../Services"
import Products from "../Products"
import Contact from "../Contact"
import Footer from "../Footer"
import './styles.css';

//HOME
const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>
            <SlideShow />
            <div className="container">
                <div id="bottom"></div>
                <About />
                <Services/>
                <Products />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
