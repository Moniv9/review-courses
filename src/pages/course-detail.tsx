import React from "react";
import { useParams } from "react-router-dom";

import { EndPoint } from "../endpoint";

import "../style.scss";

export const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = React.useState({});
  const params = useParams();

  React.useEffect(() => {
    fetch(EndPoint.courseDetail(params["id"]))
      .then((response) => response.json())
      .then((data) => setCourseDetail(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });

    return setCourseDetail({});
  }, []);

  return (
    <div className="container">
      <h1>{courseDetail["title"]}</h1>
    </div>
  );
};
