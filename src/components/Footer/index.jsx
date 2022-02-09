//FOOTER PAGE

//IMPORTING
import React from 'react';
import Logo from '../../assets/logo_footer.svg';
import './styles.css';

//FOOTER
const Footer = () => {
    return (
        <div style={{ backgroundColor: "#292b2c",color:"white" }}>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="logoFooter" src={Logo} alt="Alum tech" />
                    </div>
                    <div className="col-md-6">
                        <div id="footerIcons" style={{ display:"flex" }}>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#3b5998' }} href="/" role="button"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#55acee' }} href="/" role="button"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#ac2bac' }} href="/" role="button"><i className="fab fa-instagram" /></a>
                            <a className="btn btn-primary btn-lg btn-floating" style={{ backgroundColor: '#0082ca' }} href="/" role="button"><i className="fab fa-linkedin-in" /></a>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <hr/>
                <br/>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>MATRIZ</li>
                            <li>Syntec Group LTDA</li>
                            <li>Avenida Boa Vista n° 5544 Vila Madalena</li>
                            <li>Santo Amaro - SP</li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul>
                            <li style={{fontWeight:"bolder"}}>CONTATO</li>
                            <li>Tel: (11) 9898-7474</li>
                            <li>SAC: (11) 353-3535</li>
                            <li>Fax: (878) 878-8787</li>
                            <li>Email: contato@syntec.com.br</li>
                        </ul>
                    </div>
                </div>      
                <hr/>
                <br/>
                <div className="row">
                    <h6 style={{fontWeight:"lighter"}}>Syntec Group 2021 © Todos os direitos reservados</h6>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Footer;
