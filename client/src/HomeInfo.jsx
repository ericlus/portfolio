import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import IconButton from "@material-ui/core/IconButton";

const HomeInfo = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <Typography
          variant="h2"
          style={{
            color: "white",
            textAlign: "center",
            margin: "175px 0px 10px 0px",
            fontSize: "80px"
          }}
        >
          Hello
        </Typography>
        <Typography
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "100",
            fontSize: "20px"
          }}
        >
          I am a software engineer that has a passion for learning new
          technologies.
        </Typography>
        <Grid item xs={12} style={{ textAlign: "center", padding: "25px" }}>
          <Button variant="outlined" color="inherit" style={{ color: "white" }}>
            Learn More
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", margin: "175px 0px 10px 0px" }}
        >
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <IconButton>
                <GitHubIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <LinkedInIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <MailOutlineIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeInfo;
