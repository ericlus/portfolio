import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const useStyles = makeStyles(theme => ({
  actionRoot: {
    margin: "0px 15px",
    padding: "0px"
  },
  title: {
    flexGrow: 1
  },
  button: {
    fontWeight: 50,
    margin: "0 10px"
  },
  actionLabel: {
    fontSize: "18px",
    color: "darkgray",
    "&$actionSelected": { fontSize: "20px", color: "white" },
    transition: "font-size 0.1s, opacity 0.2s"
  },
  actionSelected: {}
}));

const NavigationBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);

  const handleClick = () => {
    setValue(-1);
  };
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
          <Typography
            variant="h5"
            className={classes.title}
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            Eric Luu
          </Typography>
          <div>
            <BottomNavigation
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              style={{ backgroundColor: "transparent" }}
            >
              <BottomNavigationAction
                label="About"
                classes={{
                  root: classes.actionRoot,
                  label: classes.actionLabel,
                  selected: classes.actionSelected
                }}
              />
              <BottomNavigationAction
                label="Resume"
                classes={{
                  root: classes.actionRoot,
                  label: classes.actionLabel,
                  selected: classes.actionSelected
                }}
              />
              <BottomNavigationAction
                label="Projects"
                classes={{
                  root: classes.actionRoot,
                  label: classes.actionLabel,
                  selected: classes.actionSelected
                }}
              />
              <BottomNavigationAction
                label="Contact"
                classes={{
                  root: classes.actionRoot,
                  label: classes.actionLabel,
                  selected: classes.actionSelected
                }}
              />
            </BottomNavigation>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
