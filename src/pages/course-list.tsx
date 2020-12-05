import * as React from "react";

import { CardComponent } from "../components/card";
import { EndPoint } from "../endpoint";

import "../style.scss";

export const CourseList = () => {
  const [topics, setTopics] = React.useState([]);

  React.useEffect(() => {
    fetch(EndPoint.mainTopics)
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });
  });

  return (
    <div className="container">
      <div className="main-topics-container">
        {topics.map((topic) => (
          <div className="topic-card">
            <CardComponent data={topic} />
          </div>
        ))}
      </div>
    </div>
  );
};
