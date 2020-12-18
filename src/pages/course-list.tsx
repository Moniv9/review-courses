import * as React from "react";
import { useParams, useHistory } from "react-router-dom";

import { SlimCard } from "../components/slim-card";
import { EndPoint } from "../endpoint";
import {ItopicData} from "../interfaces/course-list";
import {ICourseDetail} from "../interfaces/course-detail";

import "../style.scss";
import yaml from "js-yaml";
import { Tags } from "../components/tags";

export const CourseList = () => {
  const [courses, setCourses] = React.useState<ICourseDetail[]>();
  const [topic_meta, setTopicMeta] = React.useState<ItopicData>();
  const params: any = useParams();
  const history = useHistory();
  const topic_id = params["topic_id"]
  if (!topic_meta){
    fetch(EndPoint.topic(topic_id))
      .then((response) =>
        response.url.endsWith(".yaml")
          ? response.text().then((text) => yaml.safeLoad(text))
          : response.json()
      )
      .then((topic_meta) => {
        setTopicMeta(topic_meta)
      })
      .catch((error) => {
        console.log("unable to fetch data", error);
      });
      return <></>
  }
  if(courses == undefined){
    Promise.all(
      topic_meta.courses.map(
        (course_id: string) => fetch(EndPoint.courseDetail(topic_id, course_id)))
        )
    .then(responses =>
      Promise.all(responses.map((response => response.url.endsWith(".yaml")
        ? response.text().then((text) => yaml.safeLoad(text))
        : response.json())))
    )
    .then((data: ICourseDetail[]) => setCourses(data))
    .catch((error) => {
      console.log("unable to fetch course details", error)
    })
    return <></>
  }

  const action = (topic: string, id: string) => {
    history.push(`/courses/${topic}/${id}`);
  };
  console.log(courses)
  return (
    <div className="container">
      <h2>Best courses available on web for {topic_meta.title}</h2>
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
