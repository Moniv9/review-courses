import * as React from "react";
import { useParams, useHistory } from "react-router-dom";

import { SlimCard } from "../components/slim-card";
import { EndPoint } from "../endpoint";

import "../style.scss";
import yaml from "js-yaml";

export const CourseList = () => {
  const [courses, setCourses] = React.useState([]);
  const params: any = useParams();
  const history = useHistory();

  React.useEffect(() => {
    fetch(EndPoint.topic(params["topic"].toLowerCase()))
      .then((response) =>
        response.url.endsWith(".yaml")
          ? response.text().then((text) => yaml.safeLoad(text))
          : response.json()
      )
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
        {Array.isArray(courses) &&
          courses.map((course: any, index) => (
            <div key={`topic-card-${index}`} className="topic-card">
              <SlimCard
                data={{ ...course, action, actionButtonLabel: "View Course" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
