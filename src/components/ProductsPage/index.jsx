//PRODUCTS PAGE

//IMPORTING
import React from 'react';
import Header from '../Header';
import Products from '../Products';
import Contact from '../Contact';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import products from '../../assets/background-pages.jpg';

//PRODUCTS PAGE
const ProductsPage = () => {
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#aboutushead" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={products} alt="About Us" />
                </div>
                <div className="content2">
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            Nossos Parceiros
                        </ScrollAnimation>
                    </h1>
                </div>
            </section>
            <div className="container">
                <Products />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default ProductsPage;
