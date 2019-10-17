import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

const HomeInfo = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6}>
        <Typography
          variant="h2"
          style={{
            color: "white",
            textAlign: "center",
            margin: "250px 0px 10px 0px",
            fontSize: "80px"
          }}
        >
          Hello!
        </Typography>
        <Typography
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "100",
            fontSize: "30px"
          }}
        >
          My name is Eric and I love creating something from nothing.
        </Typography>

        <div style={{ textAlign: "center", margin: "270px 0px 10px 0px" }}>
          <Link href="#About">
            <Typography style={{ color: "white" }}>Learn More</Typography>
            <ExpandMoreIcon
              style={{ color: "white", display: "block", margin: "auto" }}
            />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeInfo;
