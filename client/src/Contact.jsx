import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const Contact = () => {
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
        <Typography style={{ margin: "80px 250px", fontSize: "18px" }}>
          I am currently looking for a software engineering position where I can
          contribute success to a company and advance my skills.
        </Typography>
        <Button
          href="mailto:ericluu24@gmail.com"
          variant="outlined"
          style={{
            borderColor: "brown",
            backgroundColor: "white",
            textDecoration: "none",
            color: "black"
          }}
        >
          Let's get in touch
        </Button>
      </Grid>
    </Grid>
  );
};

export default Contact;
