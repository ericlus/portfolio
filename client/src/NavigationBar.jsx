import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    color: "white",
    fontWeight: "100"
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
  },
  link: {
    textDecoration: "none"
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
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h5" className={classes.title}>
                Eric Luu
              </Typography>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "auto",
              height: "50px"
            }}
          >
            <Link
              href="#About"
              style={{ margin: "10px 15px", textDecoration: "none" }}
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
              style={{ margin: "10px 15px", textDecoration: "none" }}
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
              style={{ margin: "10px 15px", textDecoration: "none" }}
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
              style={{ margin: "10px 15px", textDecoration: "none" }}
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
            <Button
              variant="outlined"
              href="/resume"
              target="_blank"
              style={{
                color: "white",
                borderColor: "white",
                margin: "5px 20px"
              }}
            >
              Resume
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
