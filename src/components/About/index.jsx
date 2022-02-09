//ABOUT PAGE

//IMPORTING
import React from 'react';
import { Link } from "react-router-dom";
import fiberImg from "../../assets/fiber.png"
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';

//ABOUT
const About = () => {
    React.useEffect(() => {
    });
    return (
        <div>
            <br />
            <h1 style={{ textTransform: "uppercase" }}>
                <ScrollAnimation delay={400}
                    animateIn='flipInX'
                    animateOut='flipOutY'
                >
                    Syntec Group:
            </ScrollAnimation>
            </h1>
            <h3 style={{ textTransform: "uppercase", fontWeight: "lighter" }}>
                <ScrollAnimation animateIn="bounceInLeft" delay={200}>
                    Fazemos a diferença levando fibra para os quatro cantos do Brasil<br />
                    e por toda a América Latina.
                </ScrollAnimation>
            </h3>
            <br />
            <h5>
                <ScrollAnimation animateIn="fadeIn" delay={300}>
                    Mas o que é essa tecnologia?<br />
                    Fibra óptica (ou ótica) é um filamento flexível e transparente fabricado a partir 
                    de vidro ou plástico extrudido e que é utilizado como condutor de elevado rendimento 
                    de luz, imagens ou impulsos codificados. Tem diâmetro de alguns micrometros, 
                    ligeiramente superior ao de um fio de cabelo humano. Por ser um material que não 
                    sofre interferências eletromagnéticas, a fibra óptica possui uma grande importância 
                    em sistemas de comunicação de dados.<br /><br />
                    E como tudo isso surgiu? 
                    Inicialmente as fibras ópticas eram utilizadas como guias de transmissão de sinais ópticos e 
                    operavam entre distâncias limitadas, pois apresentavam grande perda de luz na transmissão, alto 
                    calor que os lasers produziam e tinham problemas com as emendas. Contudo, em meados dos anos 70, 
                    ocorreu um aprimoramento significativo das técnicas ópticas utilizadas e, devido a isso, tornou-se 
                    possível a monitoração de grandezas e a troca de informações a longas distâncias.
                </ScrollAnimation>
            </h5>
            <br />
            
            <div className="text-center">
                <img src={fiberImg} width="500" alt="Fiber" />               
            </div>
            <br />
            <div style={{ textAlign: "center" }}>
                <Link id="aboutuspagebtn" to="/about" className="btn-about">SAIBA MAIS</Link>
            </div>            
            <br />
            <br />
        </div>
    )
}

export default About;
