import * as React from "react";
import { useParams } from "react-router-dom";

import { CardComponent } from "../components/card";
import { EndPoint } from "../endpoint";

import "../style.scss";

export const CourseList = () => {
  const [topics, setTopics] = React.useState([]);
  const params = useParams();

  React.useEffect(() => {
    fetch(EndPoint.topic(params["topic"]))
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });
  });

  return (
    <div className="container">
      <div className="main-topics-container">
        <h3>{params["topic"]}</h3>
        {topics.map((topic) => (
          <div className="topic-card">
            <CardComponent data={topic} />
          </div>
        ))}
      </div>
    </div>
  );
};
