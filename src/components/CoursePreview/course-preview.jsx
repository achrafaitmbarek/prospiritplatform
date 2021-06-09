import React from "react";
import { Link } from "react-router-dom";
import "./course-preview.styles.scss";
const CoursePreview = ({ id, title, date, description, imgLink ,path}) => (
  <div className="courses-card-item">
    <div key={id} className="course-card-image">
      <img src={imgLink} alt="" />
    </div>
    <div className="course-card-infos">
      <h1 className="course-card-title">{title}</h1>
      <div className="course-card-date">
        <span>{date}</span>
      </div>
      <div className="descriptions">
      {description.map(({ title }) => (
        <p className="course-card-features">{title}</p>
      ))}
     </div>
      <Link to={path} className="course-card-cta">
        continuer
      </Link>
    </div>
  </div>
);
export default CoursePreview;
