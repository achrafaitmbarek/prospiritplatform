import React from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import "./contacte-nous.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";
init("user_CKVLtnNhNkRlhcHmuPaP2");

const ContactNous = ({CourseData}) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iwe8o2m",
        "template_iowvphd",
        e.target,
        "user_CKVLtnNhNkRlhcHmuPaP2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert('Merci! Soyez le bienvenu')
  }
  return (
    <div className="Contact-Us">
      <h2 className="title">Contactez Nous</h2>
      <span>Pour toutes vos questions et informations</span>
      <form className="ContactUsForm" onSubmit={sendEmail}>
        <div className="group">
          <input
            type="text"
            name="name"
            className='form-input'
            placeholder='votre nom complet'
            required
          />
          <input type="email" name="email" label="Email"
           className='form-input'
           placeholder='Votre Email'
           required 
           />
          <input type="tel" 
           name="phone" 
           placeholder='Votre Numero De Telephone'
           className='form-input'
           required
           />
           <input type="text" name="message" 
           placeholder='Votre Message'
           className='form-input input-message'
           required
           />
           <select className='form-input' name="choix" >
             <option hidden>A propos de quoi voulez vous nous contacter?</option>
             <option >Faculté de Medcine Generale et Dentaire FMG/FMD</option>
             <option >Études Pharmaceutiques EP</option>
             <option >Institut Agronomique et Veterinaire IAV</option>
             <option >École Nationale Superieure d'Arts et Métiers ENSAM</option>
             <option >Faculté de Medcine Generale et Dentaire FMG/FMD</option>
             <option >Formation Genie Civile</option>
             <option >Formation Orthophonie</option>
             <option >Formation en langues étrangères</option>
           </select>
          <CustomButton type='submit'>Envoyer Le Message</CustomButton>
        </div>
      </form>
    </div>
  );
};
export default ContactNous;
