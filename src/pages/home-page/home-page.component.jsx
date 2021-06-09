import React from "react";
import CoursesPage from "../../components/courses/courses.component";
import FeaturesContainer from "../../components/FeatureContainer/features-container.component";
import HomePageHeader from "../../components/home-page-header/home-page-header.component";
import Fiches from "../fiches/fiches.component";
import "./home-page.styles.scss";

const Homepage = ({ curentUser }) => (
  <div className="homepage">
    <HomePageHeader curentUser={curentUser} />
    <FeaturesContainer />
    <CoursesPage />
    <Fiches/>
  </div>
);

export default Homepage;
