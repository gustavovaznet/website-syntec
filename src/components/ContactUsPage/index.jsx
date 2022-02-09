//CONTACT US PAGE

//IMPORTING
import React, { useState } from 'react';
import firebase from '../../firebase/index';
import Header from '../Header';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';

//CAREERS PAGE
const CareersPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendData = () => {

        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        dateTime = dateTime.toString();
        
        let Data = {
            NAME: name,
            EMAIL: email,
            SUBJECT: subject,
            MESSAGE: message,
            currentTime: dateTime
        }

        firebase.database().ref(`ContactUs/`).push(Data);

        alert("Obrigado pelo seu contato, responderemos assim que possível.");

    }
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
            <br />
            <br />
            <br />
            <br />
            <iframe title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29238.999496378172!2d-46.72115559021836!3d-23.644649454018825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50f947b37dc9%3A0x4e12a7939f03c837!2sSanto%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1633045118799!5m2!1spt-BR!2sbr" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />

            <div className="container">

                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase text-primary">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            Contato
                    </ScrollAnimation>
                    </h1>                    
                    <br />
                    <label id="bottom" className="form-label">Nome Completo</label>
                    <input type="text" placeholder="Seu nome completo" onChange={(e) => setName(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Assunto</label>
                    <input type="text" placeholder="O assunto..." onChange={(e) => setSubject(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Mensagem</label>
                    <textarea className="form-control" placeholder="Mensagem..." onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>
                    <br />                    
                        <div>
                            <button disabled={true} className="btn-contactus" onClick={sendData}>Enviar</button>
                        </div>                  
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CareersPage;
