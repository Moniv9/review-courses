import * as React from "react";
import { useParams, useHistory } from "react-router-dom";

import { SlimCard } from "../components/slim-card";
import { EndPoint } from "../endpoint";
import { formatTopicName } from "../utils/format-string";

import "../style.scss";
import yaml from "js-yaml";

export const CourseList = () => {
  const [courses, setCourses] = React.useState([]);
  const params: any = useParams();
  const history = useHistory();
  const topicId = params["topic_id"];

  React.useEffect(() => {
    fetch(EndPoint.topic(topicId))
      .then((response) =>
        response.url.endsWith(".yaml")
          ? response.text().then((text) => yaml.safeLoad(text))
          : response.json()
      )
      .then((data) => setCourses(data))
      .catch((error) => {
        console.error("unable to fetch data", error);
      });

    return setCourses([]);
  }, [topicId]);

  if (!topicId) {
    return null;
  }

  const action = (topic: string, id: string) => {
    history.push(`/course/detail/${id}`);
  };

  return (
    <div className="container">
      <h2>
        Best courses available on web for
        <span className="topic-name">{formatTopicName(topicId)}</span>
      </h2>
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
