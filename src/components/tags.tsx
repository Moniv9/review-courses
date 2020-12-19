import * as React from "react";
import Chip from "@material-ui/core/Chip";

export const Tags: React.FC<{ tags: string[] | undefined }> = (props) => {
  const { tags } = props;

  if (!Array.isArray(tags)) {
    return null;
  }

  return (
    <>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          variant="outlined"
          color="secondary"
          className="tags"
        />
      ))}
    </>
  );
};
