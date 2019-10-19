import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Link from "@material-ui/core/Link";

const About = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "100", marginBottom: "15px" }}
        >
          About Me
        </Typography>
        <Divider
          variant="middle"
          style={{ backgroundColor: "brown", margin: "auto", width: "10%" }}
        />
      </Grid>

      <Grid item xs={4} style={{ margin: "60px 40px" }}>
        <Typography variant="h6" style={{ marginBottom: "20px" }}>
          Background
        </Typography>
        <Typography style={{ marginBottom: "15px" }}>
          I graduated from the City College of New York with a degree in
          Biomedical Engineering. I really enjoyed using code to program and
          configure medical devices, however, I was more interested in the code
          over the actual science behind the devices.
        </Typography>

        <Typography>
          I decided to pursue my passion in coding by attending an advanced
          software engineering immersive program where I learned to develop
          projects using the entire stack. Here the{" "}
          <Link style={{ cursor: "pointer" }}>technologies</Link> I have used
          and the <Link style={{ cursor: "pointer" }}>projects</Link> I
          developed.
        </Typography>
      </Grid>
      <Grid item xs={4} style={{ margin: "60px 40px" }}>
        <Typography variant="h6" style={{ marginBottom: "20px" }}>
          Interests
        </Typography>
        <Typography>
          Here are some of the things that I like do in my free time:
        </Typography>
        <ul>
          <Typography>
            <li>Binge watching good TV shows</li>
            <li>Spending time with friends and family</li>
            <li>Connecting with individuals that share the same interests</li>
            <li>Exploring new frameworks or modules</li>
          </Typography>
        </ul>
      </Grid>
    </Grid>
  );
};

export default About;
