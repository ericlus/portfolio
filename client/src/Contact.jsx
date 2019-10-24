import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
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
        <Typography style={{ margin: "60px 250px 30px 250px" }}>
          I am currently looking for a software engineering position where I can
          learn and advance my skills to contribute growth and success towards a
          company.
        </Typography>
        <a>
          <Button
            href="mailto:ericluu24@gmail.com"
            variant="outlined"
            style={{ borderColor: "brown", backgroundColor: "white" }}
          >
            Let's get in touch
          </Button>
        </a>
      </Grid>
    </Grid>
  );
};

export default Contact;
