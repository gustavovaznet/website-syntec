//PRODUCTS PAGE

//IMPORTING
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';
import partner01 from '../../assets/partner-01.jpg'
import partner02 from '../../assets/partner-02.jpg'
import partner03 from '../../assets/partner-03.jpg'
import partner04 from '../../assets/partner-04.jpg'
import partner05 from '../../assets/partner-05.jpg'
import partner06 from '../../assets/partner-06.jpg'

//PRODUCT
const Products = () => {
    React.useEffect(() => {
    });
    return (
        <div>
            <br />
            <hr />
            <h1 className="text-center text-uppercase title-text">
                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                    Nossos Parceiros
                </ScrollAnimation>
            </h1>
            <h5 style={{ fontWeight: "lighter", textAlign: "center" }}>
                <ScrollAnimation animateIn='fadeIn' delay={400}>
                    A Syntec trabalha somente com as melhores marcas do mercado.<br />
                    Veja alguns dos nossos parceiros.
                </ScrollAnimation>
            </h5>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner01} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    BELDEN
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner02} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    FIBER
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner03} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    CONNECT
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner04} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    FURUKAWA
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner05} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                OPTERNA
                                </div>                              
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="containerInside">
                            <img className="image" src={partner06} alt="pic" />
                            <div className="imageOverlay imageOverlayBlur">
                                <div className="image_title">
                                    GOOGLE FIBER
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
