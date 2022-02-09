//CONTACT PAGE

//IMPORTING
import React, { useState } from 'react';
import firebase from '../../firebase/index';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';

//CONTACT
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [company, setCompany] = useState("");
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
            PHONE: phone,
            COMPANY: company,
            MESSAGE: message,
            currentTime: dateTime
        }

        firebase.database().ref(`GetInTouch/`).push(Data);

        alert("Thank you for contacting Us.We will reach back to you soon.");

        setName("");
        setEmail("");
        setPhone(0);
        setCompany("");
        setMessage("");
    }

    //RETURN
    return (
        <div>
            <br />
            <hr />
            <br />
            <br />

            <h1 className="text-center text-uppercase">
                <ScrollAnimation animateIn='flipInY'
                    animateOut='flipOutY'>
                    Contato
                </ScrollAnimation>
            </h1>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <input placeholder="Nome" inputMode="text" className="form-control inputStyle" onChange={(e) => setName(e.target.value)} type="text" />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div>
                                    <input placeholder="Email" inputMode="email" onChange={(e) => setEmail(e.target.value)} className="form-control inputStyle" type="email" />

                                </div>
                            </div>
                        </div>

                        <div style={{ paddingTop: "3%" }} className="row">
                            <div className="col-md-6">
                                <div>
                                    <input placeholder="Telefone" inputMode="numeric" onChange={(e) => setPhone(e.target.value)} className="form-control inputStyle" type="text" />

                                </div>
                            </div>

                            <div className="col-md-6">
                                <div>
                                    <input placeholder="Empresa" onChange={(e) => setCompany(e.target.value)} className="form-control inputStyle" type="text" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-md-4">
                        <div>
                            <textarea placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)} className="form-control" name="" id="" cols="35" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label style={{ fontWeight: "lighter" }} className="form-check-label" htmlFor="flexCheckDefault">
                                Concordo em receber emails do Grupo Syntec no futuro.
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6">                       
                            <div>
                                <button id="submit" disabled={true} className="btn-contact" onClick={sendData}>ENVIAR</button>
                            </div>                    
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Contact;
