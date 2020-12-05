import * as React from "react";
import { useParams, useHistory } from "react-router-dom";

import { CardComponent } from "../components/card";
import { EndPoint } from "../endpoint";

import "../style.scss";

export const CourseList = () => {
  const [courses, setCourses] = React.useState([]);
  const params: any = useParams();
  const history = useHistory();

  React.useEffect(() => {
    fetch(EndPoint.topic(params["topic"].toLowerCase()))
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });

    return setCourses([]);
  }, [params]);

  const action = (topic: string, id: string) => {
    history.push(`/course/detail/${id}`);
  };

  return (
    <div className="container">
      <h2>Best courses available on web for {params["topic"]}</h2>
      <div className="main-topics-container">
        {courses.map((course: any, index) => (
          <div key={`topic-card-${index}`} className="topic-card">
            <CardComponent
              data={{ ...course, action, actionButtonLabel: "Course Details" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
