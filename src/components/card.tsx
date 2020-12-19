import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { ICard } from "../interfaces/card";

const useStyles = makeStyles({
  root: {
    maxWidth: 320
  }
});

export const CardComponent: React.FC<{ data: ICard }> = (props) => {
  const classes = useStyles();
  const { data } = props;

  if (!data) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="250"
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {Array.isArray(data.tags) && data.tags.join(", ")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => data.action(data.id)}
        >
          {data.actionButtonLabel ? data.actionButtonLabel : "View Courses"}
        </Button>
      </CardActions>
    </Card>
  );
};
