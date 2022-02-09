//SLIDE SHOW

//IMPORTING
import React from 'react';
import './styles.css';
import video from '../../assets/video.mp4';
import { Link } from "react-router-dom"

//SLIDESHOW
const SlideShow = () => {
    //RETURN
    return (
        <div>
            <section className="showcase">
                <div className="video-container">
                    <video autoPlay loop muted controls>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h1 className="animateIt">TECNOLOGIA FIBRA ÓPTICA DE PONTA</h1>
                    <h4 className="animateIt" style={{ fontWeight: "lighter" }}>Deixe a gente cuidar da sua infraestrutura.</h4>
                    <Link to="/about" className="btns">SAIBA MAIS</Link>
                </div>
            </section>
        </div>
    )
}

export default SlideShow;
