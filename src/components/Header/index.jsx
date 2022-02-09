//HEADER PAGE

//IMPORTING
import React, { useEffect } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from "react-router-dom"

//HEADER
const Header = () => {
  useEffect(() => {
    const debounce = (fn) => {

      let frame;

      return (...params) => {

        if (frame) {
          cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {

          fn(...params);
        });

      }
    };
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }

    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    storeScroll();
  })
  return (
    <div>
      <nav style={{ borderBottom: "0.5px solid #0275d8" }} className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img className="logo" src={logoImg} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">SOBRE</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">SERVIÇOS</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">PARCEIROS</Link>
              </li>
              <li className="nav-item">
                <Link to="/career" className="nav-link">CARREIRAS</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">CONTATO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
