import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { ICard } from "../interfaces/card";
import { Tags } from "./tags";

const useStyles = makeStyles({
  root: {
    width: 800,
    height: 200,
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {}
});

export const SlimCard: React.FC<{ data: ICard }> = (props) => {
  const classes = useStyles();
  const { data } = props;

  if (!data) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <img src={data.image} alt={data.title} className="slim-card-img" />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <Tags tags={data.tags} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => data.action(data?.title, data?.id)}
          >
            {data.actionButtonLabel ? data.actionButtonLabel : "View"}
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
