//SERVICES

//IMPORTING
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';
import projectsImg from '../../assets/projects.jpg'
import operationsImg from '../../assets/operations.jpg'
import salesImg from '../../assets/sales.jpg'
import consultancyImg from '../../assets/consultancy.jpg'

//SERVICES
const Services = () => {
    return (
        <div className="our-services">
            <div className="container">
                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase title-text">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY' initiallyVisible={true}>
                            Nossos Serviços
                    </ScrollAnimation>
                    </h1>
                    <div>
                        <ul className="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="ex3-tab-1" data-mdb-toggle="tab" href="#ex3-tabs-1" role="tab" aria-controls="ex3-tabs-1" aria-selected="true">PROJETOS</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-2" data-mdb-toggle="tab" href="#ex3-tabs-2" role="tab" aria-controls="ex3-tabs-2" aria-selected="false">OPERAÇÕES</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-3" data-mdb-toggle="tab" href="#ex3-tabs-3" role="tab" aria-controls="ex3-tabs-3" aria-selected="false">VENDAS</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="ex3-tab-4" data-mdb-toggle="tab" href="#ex3-tabs-4" role="tab" aria-controls="ex3-tabs-4" aria-selected="false">CONSULTORIA</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="ex2-content">
                            <div className="tab-pane fade show active" id="ex3-tabs-1" role="tabpanel" aria-labelledby="ex3-tab-1">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    GESTÃO E IMPLANTAÇÃO DE PROJETOS
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    A Syntec é especialista em projetos de infraestrutura de redes e backbones para
                                                    empresas de médio e grande porte.<br /><br />
                                                    Contando com equipe completa, acostumados com as metodologias mais modernas do mercado, 
                                                    tudo isso sempre prezando a agilidade e qualidade dos nossos serviços.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={projectsImg} width="100%" height="300" alt="Projects" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-2" role="tabpanel" aria-labelledby="ex3-tab-2">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    OPERAÇÃO E SERVIÇOS TÉCNICOS
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    Possuímos uma equipe grande e qualificada de profissionais para as operações,
                                                    técnicos certificados e preparados para qualquer desafio.
                                                    A Syntec acredita que a qualificação dos nossos profissionais é a chave para manter
                                                    a qualidade nos serviços.
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={operationsImg} width="100%" height="300" alt="Operations" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-3" role="tabpanel" aria-labelledby="ex3-tab-3">

                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    VENDA DE INSUMOS E EQUIPAMENTOS
                                              </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    Somos parceiros das maiores e melhores marcas de insumos e equipamentos do nosso
                                                    ramo de atuação, negociamos grandes lotes de produtos sempre visando a qualidade e
                                                    o preço justo.
                                              </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={salesImg} width="100%" height="300" alt="Sales" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="ex3-tabs-4" role="tabpanel" aria-labelledby="ex3-tab-4">
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-7">
                                            <h1>
                                                <ScrollAnimation animateIn='bounceInRight' delay={400} initiallyVisible={true}>
                                                    CONSULTORIA ESPECIALIZADA
                                                </ScrollAnimation>
                                            </h1>
                                            <h5 style={{ fontWeight: "lighter" }}>
                                                <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}>
                                                    <br />
                                                    Possuímos consultores especializados para um atendimento personalizado, entender a sua
                                                    necessidade é essencial para prestarmos um serviço de qualidade.
                                                    <br />
                                                </ScrollAnimation>
                                            </h5>
                                        </div>
                                        <div className="col-md-5">
                                            <img src={consultancyImg} width="100%" height="300" alt="Consultancy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Services;
