import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  greeting: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: "10px",
    fontSize: "80px",
    height: "47%",
    "@media (max-width: 639px)": { height: "45%" }
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "100",
    fontSize: "30px",
    width: "70%",
    margin: "auto",
    "@media (max-width: 458px)": { width: "90%" }
  }
}));

const HomeInfo = () => {
  const classes = useStyles();
  return (
    <div style={{ height: "100vh" }}>
      <Typography variant="h2" className={classes.greeting}>
        Hello!
      </Typography>
      <Typography className={classes.text}>
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
        <Link href="#About" underline="none" style={{ textDecoration: "none" }}>
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
    </div>
  );
};

export default HomeInfo;
