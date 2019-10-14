import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  button: {
    fontWeight: 50,
    margin: "0 10px"
  }
}));

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          color: "white"
        }}
        elevation={0}
      >
        <Toolbar style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <Typography variant="h5" className={classes.title}>
            Eric Luu
          </Typography>
          <div>
            <Button className={classes.button} color="inherit">
              About
            </Button>
            <Button className={classes.button} color="inherit">
              Resume
            </Button>
            <Button className={classes.button} color="inherit">
              Projects
            </Button>
            <Button className={classes.button} color="inherit">
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
