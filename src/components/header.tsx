import * as React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "../style.scss";

export const Header = () => {
  return (
    <AppBar position="static" style={{ background: "#587cf" }}>
      <Toolbar>
        <Typography variant="h5">Course Review</Typography>
      </Toolbar>
    </AppBar>
  );
};
