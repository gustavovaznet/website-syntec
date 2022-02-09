//ABOUT US PAGE

//IMPORTING 
import React from 'react';
import Header from '../Header';
import Contact from '../Contact';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';
import aboutimg from '../../assets/background-pages.jpg';

//ABOUT US PAGE
const AboutUsPage = () => {

    React.useEffect(() => {

    });
    //RETURN
    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <div className="animatedArrow">
                <a href="#bottom" style={{borderRadius:"50%", border: "0px solid #ADD8E6", fontSize: 50, backgroundColor: "transparent" }} className="btn-floating btn-large red">
                    <i className="fa fa-arrow-down" />
                </a>
            </div>

            <section className="showcase2">
                <div className="image-container">
                    <img src={aboutimg} alt="About Us" />
                </div>
                <div className="content2">
                    <h1 id="aboutushead">
                        <ScrollAnimation animateIn="fadeIn" delay={200}>
                            Sobre Nós
                        </ScrollAnimation>
                    </h1>
                </div>
            </section>
            <div className="container">
                <div>
                    <br />
                    <br />
                    <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
                        <ScrollAnimation delay={400}
                            animateIn='flipInX'
                            animateOut='flipOutY'
                        >
                            Somos pioneiros no nosso ramo, ficando entre as 5 maiores do brasil e entre
                            as 12 maiores de toda a américa latina.
                         </ScrollAnimation>
                    </h1>
                    <br />
                    <span id="bottom"></span>
                    <h5 style={{ fontWeight: "lighter", textAlign: "center", lineHeight: "35px" }}>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                        Somos lideres de mercado, fundada em 1999, a Syntec possui hoje mais de 800
                        colaboradores espelhados pelo Brasil e por vários países da américa latina,
                        são mais de 2000 clientes de grande porte atendidos, mais de 30% de toda a 
                        infraentrutura de redes do continente da américa do sul foi projetada e implementada
                        por nossos profissionais. Compromisso, qualidade e eficiência são os nossos pilares, 
                        prezamos pelo preço justo  e excelência no atendimento a todos os nossos clientes. 
                        Nós somos Syntec Group.
                </ScrollAnimation>
                    </h5>
                </div>
                <Contact />
            </div>
            <Footer />         
        </div>
    )
}

export default AboutUsPage;
