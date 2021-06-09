import React from "react";
import "./courses.styles.scss";
import CourseData from "./course-data";
import CoursePreview from "../CoursePreview/course-preview";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: CourseData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="course-list-container">
        <h1>Benificiez vous De Nos Formation Ajourd'Hui</h1>
        {collections.filter((item,idx)=>idx<4).map(({ id, ...otherCollectionProps }) => (
          <CoursePreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default CoursesPage;
