import React from 'react';
import './fiches.styles.scss';
import fiche1 from '../../assets/Affiche1.png'
import fiche2 from '../../assets/Affiche2.png'
import { Link } from "react-router-dom";

const Fiches=()=>(
    <div className="fiches-container">
        <h2>PRÉPARATION AU CONCOURS NATIONAUX POUR : LE BAC NATIONAL ET INTERNATIONAL</h2>
        <div className="list-schools">
        <ul>
            <li>-Faculté de Medcine Generale et Dentaire FMG/FMD</li>
            <li>-Études Pharmaceutiques EP</li>
            <li>-Institut Agronomique et Veterinaire IAV</li>
            <li>-École Nationale Superieure d'Arts et Métiers ENSAM</li>
            <li>-École Nationale des Sciences Appliquées ENSA</li>
            <li>-École Nationale de Commerce et de Gestion ENCG</li>
        </ul>
        </div>
        <img src={fiche1} alt="" />
        <img src={fiche2} alt="" />
        <div className="information-inscription">
            <Link to="/ContactUs" className="course-card-cta see-more-button">
        Pour informations et inscriptions
      </Link>
        </div>
    </div>
);
export default Fiches;