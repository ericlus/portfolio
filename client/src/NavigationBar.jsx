import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  regularToolbar: { minHeight: "50px" }
}));

const NavigationBar = ({ changeView, navState }) => {
  const classes = useStyles();

  const navBackground = {
    true: {
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    false: {
      backgroundColor: "transparent"
    }
  };

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
            <Link href="#Home">
              <Typography
                variant="h5"
                className={classes.title}
                style={{ cursor: "pointer", color: "white" }}
              >
                Eric Luu
              </Typography>
            </Link>
          </div>
          <div
            style={{ display: "flex", marginLeft: "auto", marginRight: "0" }}
          >
            <Link href="#About" style={{ margin: "0px 15px" }}>
              <Typography
                style={{ color: "white", fontSize: "20px", fontWeight: "100" }}
              >
                About
              </Typography>
            </Link>
            <Link href="#Skills" style={{ margin: "0px 15px" }}>
              <Typography
                style={{ color: "white", fontSize: "20px", fontWeight: "100" }}
              >
                Skills
              </Typography>
            </Link>
            <Link href="#Projects" style={{ margin: "0px 15px" }}>
              <Typography
                style={{ color: "white", fontSize: "20px", fontWeight: "100" }}
              >
                Projects
              </Typography>
            </Link>
            <Link href="#Contact" style={{ margin: "0px 15px" }}>
              <Typography
                style={{ color: "white", fontSize: "20px", fontWeight: "100" }}
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
