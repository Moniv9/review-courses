import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { Review } from "../interfaces/review";
import { EndPoint } from "../endpoint";
import yaml from "js-yaml";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "200",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  })
);

export const Reviews: React.FC<{ id: string }> = (props) => {
  const classes = useStyles();
  const [reviews, setRewiews] = React.useState<Review[]>([]);
  const { id } = props;

  if (!id) {
    return null;
  }

  console.log(reviews, id);

  React.useEffect(() => {
    fetch(EndPoint.reviews(id))
      .then((response) =>
        response.url.endsWith(".yaml")
          ? response.text().then((text) => yaml.safeLoad(text))
          : response.json()
      )
      .then((data) => setRewiews(data))
      .catch((error) => {
        console.log("unable to fetch data", error);
      });
  }, [id]);

  if (!Array.isArray(reviews)) {
    return null;
  }

  return (
    <>
      <h2>Reviews</h2>
      <List className={classes.root}>
        {reviews.map((review) => {
          return (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={review.username} src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={review.username}
                  secondary={<>{review.review}</>}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          );
        })}
      </List>
    </>
  );
};
