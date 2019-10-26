import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

const HomeInfo = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={6} style={{ height: "100vh" }}>
        <Typography
          variant="h2"
          style={{
            display: "flex",
            color: "white",
            justifyContent: "center",
            alignItems: "flex-end",
            marginBottom: "10px",
            fontSize: "80px",
            height: "47%"
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

        <div
          style={{
            textAlign: "center",
            width: "100%",
            position: "absolute",
            bottom: "0",
            right: "0"
          }}
        >
          <Link
            href="#About"
            underline="none"
            style={{ textDecoration: "none" }}
          >
            <Typography style={{ color: "white" }}>Learn More</Typography>
            <ExpandMoreIcon
              style={{
                color: "white",
                display: "block",
                margin: "auto",
                marginTop: "3px"
              }}
              className="expandMore"
            />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default HomeInfo;
