//CAREERS PAGE

//IMPORTING
import React, { useState, useEffect } from 'react';
import firebase from '../../firebase/index';
import { storage } from '../../firebase';
import Header from '../Header';
import Footer from '../Footer';
import ScrollAnimation from 'react-animate-on-scroll';
import './styles.css';
import career from '../../assets/background-pages.jpg';

//CAREERS PAGE
const CareersPage = () => {

    const [ImageURL, setImageURL] = useState("https://firebasestorage.googleapis.com/v0/b/alumtech-9f4f0.appspot.com/o/images%2FResume-Muhammad-Bilal.pdf?alt=media&token=c79b7621-233e-4cf6-a8a6-4d8fb6ac960e");

    const [image, setImage] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            setImage(image);
        }
    }

    const handleUpload = (e) => {
        const img = image;
        if (img != null) {
            const uploadTask = storage.ref(`images/${img.name}`).put(img);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage.ref('images').child(img.name).getDownloadURL().then(url => {
                        setImageURL(url);
                    })
                });

            alert(e.target.innerText);
            }
        else {
            alert("Por favor selecione o seu CV");
        }
    }

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
            IMAGEURL: ImageURL,
            currentTime: dateTime
        }

        firebase.database().ref(`JobVacancies/`).push(Data);
        
        alert("Obrigado por enviar o seu currículo, entraremos em contato assim que possíivel.");

        setEmail("");
        setName("");
        setSubject("");
        setMessage("");
        setImageURL("");
    }

    useEffect(() => {
        console.log("The input is :", ImageURL);
    })

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
            <img src={career} height="300" width="100%" alt="Career" />
            <div className="container">
                <div>
                    <br />
                    <hr />
                    <h1 className="text-center text-uppercase">
                        <ScrollAnimation animateIn='flipInY'
                            animateOut='flipOutY'>
                            Carreiras
                    </ScrollAnimation>
                    </h1>
                    <h4 id="bottom" style={{ fontWeight: "normal", textAlign: "left" }}>
                        <ScrollAnimation animateIn='fadeIn' delay={400}>
                            Currículo
                    </ScrollAnimation>
                    </h4>
                    <br />
                    <h6 style={{ fontWeight: "lighter", textAlign: "left" }}>
                        <ScrollAnimation animateIn='bounceInRight' delay={400}>
                            Estamos sempre em busca de novos talentos, envie o seu CV por aqui.
                        </ScrollAnimation>
                    </h6>
                    <br />

                    <label className="form-label">Nome Completo</label>
                    <input type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Email</label>
                    <input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Assunto</label>
                    <input type="text" placeholder="Assunto..." onChange={(e) => setSubject(e.target.value)} className="form-control" />

                    <br />
                    <label className="form-label">Mensagem</label>
                    <textarea className="form-control" placeholder="Mensagem..." onChange={(e) => setMessage(e.target.value)} rows="5"></textarea>

                    <br />
                    <br />
                    <div style={{ maxWidth: "90%" }} id="logindiv">
                        <progress style={{ width: "100%", borderRadius: "2px" }} className="progress-bar progress-bar-striped progress-bar-animated" value={progress} max="100" />
                        <br />

                        <label className="form-label">Currículo</label>
                        <input type="file" placeholder="Enter your name here" className="form-control" onChange={(e) => handleChange(e)} />
                        <br />
                            <button className="btn btn-dark" onClick={(e) => handleUpload(e)}>CARREGAR</button>
                        <br />
                        <br />
                    </div>
                    <br />                    
                        <div>
                            <button disabled={true} className="btn-careers" onClick={sendData}>ENVIAR</button>                            
                        </div>                                          
                    <br />
                    <br />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CareersPage;
