import React from "react";
import "./footer.styles.scss";
const Footer = () => (
  <div className="main-contain">
    <div className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>INSTITUT DE FORMATION PROFESSIONNEL POLYTECH PRIVEE</h3>
        <span className="adresse">
          <p>143 Angle avenue allal Ben Abdellah </p>
          <p>et rue Abou Faress Almarini,3eme etage</p>
          <p>plateau N°9 Hassan au dessus de Soldeur</p>
          <p>et Caffé Milano (1minute de la gare Rabat Ville)</p>
          <p>
            <img
              className="phoneicon"
              src="https://img.icons8.com/flat-round/64/000000/phone.png"
           alt='iconphone' />
            0616110498
          </p>
          <p>
            <img
              className="phoneicon"
             src="https://img.icons8.com/plasticine/100/000000/whatsapp.png"
           alt='WtspIcon' />
            0694891105
          </p>
          <p>
            <img
              className="phoneicon"
              src="https://img.icons8.com/flat-round/64/000000/phone.png"
            alt='iconphone'/>
            0530301007
          </p>
        </span>
      </div>
      <div className="footer-section">
        <h3>Relier</h3>
        <a href="https://web.facebook.com/soutienprepa" target="_blank" rel="noreferrer">Facebook</a>
        <a href="https://www.instagram.com/abc_prepa_soutienetformation/" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </div>
  </div>  
  <p className="CopyrightName ml3">Copyright © 2021
  <a href="https://inovat.ma/" target="_blank" rel="noreferrer"> INOVAT RABAT </a> 
  . Tous droits réservés.</p>
  </div>
);
export default Footer;
