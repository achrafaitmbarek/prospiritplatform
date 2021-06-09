import React from "react";
import "./LostPage.styles.scss";
import { Link } from "react-router-dom";

const LostPage = ({Formation}) => (
    <div class="container">
      <div class="row">
        <div class="neons col-12">
          <h1>
            <em>Les formations à distance sont en production . Ils seront bientôt disponible sur notre platforme</em>
          </h1>
          <h1>
            <Link id ="reservbutton"to="/ContactUs" formation={Formation}>cliquez ici pour reserver votre place en presentiel</Link>
          </h1>
          <h1>les places sont limitées !</h1>
        </div>
      </div>
    </div>
);
export default LostPage;
