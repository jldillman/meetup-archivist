import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PastMeetups from "../features/PastMeetups";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const MainLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Met Up
          </Typography>
        </Toolbar>
      </AppBar>
      <PastMeetups />
    </div>
  );
};

export default MainLayout;
