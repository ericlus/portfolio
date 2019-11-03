import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles(theme => ({
  textWidth: {
    margin: "80px 17vw",
    textAlign: "center",
    "@media (max-width: 1320px)": { margin: "80px 10vw" }
  },
  fab: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.87)"
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "100", marginBottom: "15px" }}
        >
          Contact
        </Typography>
        <Divider
          variant="middle"
          style={{ backgroundColor: "brown", margin: "auto", width: "10%" }}
        />
      </Grid>
      <Grid item xs={12} className={classes.textWidth}>
        <Typography style={{ fontSize: "18px" }}>
          I am currently looking for a software engineering position where I can
          contribute success to a company and advance my skills.
        </Typography>
      </Grid>
      <Fab
        variant="extended"
        aria-label="like"
        className={classes.fab}
        href="mailto:ericluu24@gmail.com"
      >
        <MailOutlineIcon className={classes.extendedIcon} />
        Email
      </Fab>
      <Fab
        variant="extended"
        aria-label="like"
        className={classes.fab}
        href="/EricLuuResume"
        target="_blank"
      >
        <AccountBoxIcon className={classes.extendedIcon} />
        Resume
      </Fab>
    </Grid>
  );
};

export default Contact;
