import React from "react";
import "./featurescontainer.styles.scss";
const FeaturesContainer = () => (
  <div className="featurescontainer">
    <h2 className="guide">Guides</h2>
    <h1 className="title">
      Acquérir des compétences du monde réel des guides complets (A distance ou
      Presentiel selon votre choix)
    </h1>
    <div className="features">
      <div className="feature-item">
        <h2>Ne vous perdez pas dans d'innombrables heures de cours vidéo</h2>
        <span className="description">
          Souhaitez vous faire des cours dans n’importe quel niveau scolaire et
          voulez vous assurer les préparations pour intégrer les grandes écoles
          supérieures marocaines tout en préservant une formation de qualité à
          des prix abordables ? Alors nous avons la solution ! Avec notre 
          INSTITUT DE FORMATION PROFESSIONNEL POLYTECH PRIVEE
          , vous pouvez avoir un professeur qui peut vous assurer des
          cours dont vous avez besoin et avec un niveau de qualité remarquable.​
        </span>
      </div>
      <div className="feature-item">
        <h2>Notre INSTITUT DE FORMATION PROFESSIONNEL POLYTECH PRIVEE vous assure la préparation des concours selon le nouveau programme</h2>
        <span className="description">
          Des instructions étape par étape, des vidéos, des exemples de concours
          et des démos en direct regroupés fournissent une approche
          rafraîchissante de l'apprentissage, pour reussir votre concour
          post-bac , facile à comprendre et a consulter
        </span>
      </div>
    </div>
  </div>
);
export default FeaturesContainer;
