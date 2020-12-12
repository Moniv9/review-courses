import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

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
  const { id } = props;

  if (!id) {
    return null;
  }

  return (
    <>
      <h2>Reviews</h2>
      <List className={classes.root}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Rahul Sharma"
            secondary={
              <React.Fragment>
                {
                  "Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text."
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
};
