import React from "react";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";

import { Reviews } from "../components/reviews";
import { Tags } from "../components/tags";
import { ICourseDetail } from "../interfaces/course-detail";
import { EndPoint } from "../endpoint";

import "../style.scss";
import yaml from "js-yaml";

export const CourseDetail = () => {
  const [courseDetail, setCourseDetail] = React.useState<ICourseDetail>();
  const params: any = useParams();
  const id = params["id"];

  React.useEffect(() => {
    fetch(EndPoint.courseDetail(id))
      .then((response) =>
        response.url.endsWith(".yaml")
          ? response.text().then((text) => yaml.safeLoad(text))
          : response.json()
      )
      .then((data) => setCourseDetail(data))
      .catch((error) => {
        console.error("unable to fetch data", error);
      });
  }, [id]);

  if (!courseDetail || !id) {
    return null;
  }

  return (
    <div className="container">
      <h1>{courseDetail.title}</h1>
      <p>{courseDetail.description}</p>
      <div>
        <Tags tags={courseDetail.tags} />
      </div>
      {courseDetail?.rating && (
        <Rating
          precision={0.5}
          name="rating"
          value={courseDetail.rating}
          max={10}
        />
      )}
      <div className="go-to-course">
        <Button
          variant="contained"
          color="primary"
          href={courseDetail.url}
          target="_blank"
        >
          {`Go to ${courseDetail.sourceName} Course`}
        </Button>
      </div>
      <div>
        <Reviews id={courseDetail.id} />
      </div>
    </div>
  );
};
