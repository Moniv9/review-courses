import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

import { EndPoint } from "../endpoint";

import "../style.scss";

interface ICourseDetail {
  id: string;
  title: string;
  description: string;
  url: string;
  sourceName: string;
  reviews: string[];
  rating: number;
  levels: string[];
}

export const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = React.useState<ICourseDetail>();
  const params = useParams();

  React.useEffect(() => {
    fetch(EndPoint.courseDetail(params["id"]))
      .then((response) => response.json())
      .then((data) => setCourseDetail(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });
  }, [params]);

  return (
    <div className="container">
      <h1>{courseDetail?.title}</h1>
      <Rating name="rating" defaultValue={courseDetail?.rating} max={10} />
    </div>
  );
};
