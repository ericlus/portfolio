import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: "white"
  },
  regularToolbar: { minHeight: "50px" },
  navItem: {
    color: "gray",
    fontSize: "20px",
    fontWeight: "100",
    "&:hover": {
      color: "white"
    }
  },
  navSelected: {
    color: "white",
    fontSize: "20px",
    fontWeight: "100"
  }
}));

const NavigationBar = ({ changeView, view, navState }) => {
  const classes = useStyles();

  const navBackground = {
    true: {
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    false: {
      backgroundColor: "transparent"
    }
  };

  const handleClick = viewName => changeView(viewName);

  return (
    <div>
      <AppBar style={navBackground[navState]} elevation={0}>
        <Toolbar
          className={classes.regularToolbar}
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            margin: "0px 100px"
          }}
        >
          <div>
            <Link
              href="#Home"
              underline="none"
              onClick={() => handleClick("HOME")}
            >
              <Typography variant="h5" className={classes.title}>
                Eric Luu
              </Typography>
            </Link>
          </div>
          <div
            style={{ display: "flex", marginLeft: "auto", marginRight: "0" }}
          >
            <Link
              href="#About"
              underline="none"
              style={{ margin: "0px 15px" }}
              onClick={() => handleClick("ABOUT")}
            >
              <Typography
                className={
                  view !== "ABOUT" ? classes.navItem : classes.navSelected
                }
              >
                About
              </Typography>
            </Link>
            <Link
              href="#Skills"
              underline="none"
              style={{ margin: "0px 15px" }}
              onClick={() => handleClick("SKILLS")}
            >
              <Typography
                className={
                  view !== "SKILLS" ? classes.navItem : classes.navSelected
                }
              >
                Skills
              </Typography>
            </Link>
            <Link
              href="#Projects"
              underline="none"
              style={{ margin: "0px 15px" }}
              onClick={() => handleClick("PROJECTS")}
            >
              <Typography
                className={
                  view !== "PROJECTS" ? classes.navItem : classes.navSelected
                }
              >
                Projects
              </Typography>
            </Link>
            <Link
              href="#Contact"
              underline="none"
              style={{ margin: "0px 15px" }}
              onClick={() => handleClick("CONTACT")}
            >
              <Typography
                className={
                  view !== "CONTACT" ? classes.navItem : classes.navSelected
                }
              >
                Contact
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
