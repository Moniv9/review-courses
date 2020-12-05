import React from "react";
import { useHistory } from "react-router-dom";

import { CardComponent } from "../components/card";
import { EndPoint } from "../endpoint";

import "../style.scss";

export const Home = () => {
  const [topics, setTopics] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    fetch(EndPoint.mainTopics)
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });

    return setTopics([]);
  }, []);

  const action = (topic: string) => {
    history.push(`/courses/${topic}`);
  };

  return (
    <div className="container">
      <div className="main-topics-container">
        {topics.map((topic: any, index) => (
          <div key={`topic-card-${index}`} className="topic-card">
            <CardComponent data={{ ...topic, action }} />
          </div>
        ))}
      </div>
    </div>
  );
};
