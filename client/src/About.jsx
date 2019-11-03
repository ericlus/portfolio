import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

const About = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={12}>
        <Typography
          variant="h4"
          style={{
            fontWeight: "100",
            marginBottom: "15px",
            textAlign: "center"
          }}
        >
          About Me
        </Typography>
        <Divider
          variant="middle"
          style={{ backgroundColor: "brown", margin: "auto", width: "10%" }}
        />
      </Grid>
      <Grid item xs={12} style={{ margin: "80px 10vw" }}>
        <Typography style={{ fontSize: "18px" }}>
          I graduated from the City College of New York with a degree in
          Biomedical Engineering. I really enjoyed using code to program and
          configure medical devices, however, I was more interested in the code
          over the actual science behind the devices. I decided to pursue my
          passion in coding by attending an advanced software engineering
          immersive program where I learned to develop projects using the entire
          stack. Here are the{" "}
          <Link href="#Skills" style={{ cursor: "pointer", color: "brown" }}>
            technologies
          </Link>{" "}
          I have used and the{" "}
          <Link href="#Projects" style={{ cursor: "pointer", color: "brown" }}>
            projects
          </Link>{" "}
          I developed.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
