import React from "react";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
    backgroundColor: "white"
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div style={{ maxWidth: "1440px", margin: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Fab
          href="https://github.com/ericlus"
          target="_blank"
          className={classes.fab}
        >
          <GitHubIcon />
        </Fab>
        <Fab
          href="https://www.linkedin.com/in/ericwluu/"
          target="_blank"
          className={classes.fab}
        >
          <LinkedInIcon />
        </Fab>
        <Fab href="mailto:ericluu24@gmail.com" className={classes.fab}>
          <MailIcon />
        </Fab>
      </div>
      <Typography
        variant="body1"
        style={{
          color: "rgba(255, 255, 255, 0.3)",
          textAlign: "center",
          fontWeight: "100",
          margin: "15px 300px"
        }}
      >
        This website was built using Material-UI and Bootstrap.{" "}
        <span style={{ color: "white" }}>Material-UI</span> was used for the
        styling and <span style={{ color: "white" }}>Bootstrap</span> was used
        for the project modal and project image carousel.
      </Typography>
      <Typography
        variant="body1"
        style={{
          color: "rgba(255, 255, 255, 0.3)",
          textAlign: "center",
          fontWeight: "100",
          marginTop: "30px"
        }}
      >
        ERIC LUU @ 2019
      </Typography>
    </div>
  );
};

export default Footer;
