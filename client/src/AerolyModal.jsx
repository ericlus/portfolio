import React from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "react-bootstrap/Modal";
import Chip from "@material-ui/core/Chip";
import AerolyScreenshot1 from "../images/aeroly1.png";
import AerolyScreenshot2 from "../images/aeroly2.png";
import AerolyScreenshot3 from "../images/aeroly3.png";
import AerolyScreenshot4 from "../images/aeroly4.png";
import ProjectImages from "./ProjectImages.jsx";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  imagePaper: {
    margin: "20px 0px"
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    padding: "20px"
  }
});

const AerolyModal = props => {
  const classes = useStyles();
  const aerolyChipData = [
    { key: 0, label: "React" },
    { key: 1, label: "Express" },
    { key: 2, label: "CSS3" },
    { key: 3, label: "Moment" },
    { key: 4, label: "Material-UI" },
    { key: 5, label: "Bootstrap" }
  ];
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ padding: "0px" }}>
        {props.viewwidth > 1199 ? (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={8}>
              <ProjectImages
                pictures={[
                  AerolyScreenshot1,
                  AerolyScreenshot2,
                  AerolyScreenshot3,
                  AerolyScreenshot4
                ]}
              />
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                padding: "20px",
                maxHeight: "600px",
                overflow: "scroll"
              }}
            >
              <Modal.Header
                closeButton
                style={{ borderBottom: "0px", padding: "0px" }}
              />
              <h3>Aeroly</h3>
              {aerolyChipData.map(chip => {
                return (
                  <Chip
                    key={chip.key}
                    size="small"
                    label={chip.label}
                    style={{ margin: "3px" }}
                    variant="outlined"
                  />
                );
              })}
              <div style={{ margin: "20px 0px" }}>
                <a
                  href="https://github.com/ericlus/Aeroly"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outlined" startIcon={<GitHubIcon />}>
                    Code
                  </Button>
                </a>
              </div>
              <h5 style={{ marginTop: "15px" }}>About</h5>
              <p>
                Aeroly is a flight price tracking application that will get the
                latest deals to any destination. Aeroly uses the Skyscanner API
                to get live results and ticket redirect to the purchasing page.
              </p>
              <p>
                Some of the challenges I faced was using the API to get live
                ticket prices. The API required a x-www-form-urlencoded content
                type in the body, however, I was sending JSON data and was
                receiving a status code of 400. To resolve the issue I had to
                attach a content type header and use a querystring module to
                convert the object in my body to an URI encoded string.
              </p>
              <p>
                Another challenge I faced was creating the destination search
                input to continually find related destinations while the user
                types in a string. To create the related destination search I
                sent a GET request to the API whenever the search input changes
                to get an array of related destinations. I then used bootstrap
                dynamically render the array of values as selectable entries
                that will auto fill the search when clicked.
              </p>
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid
              item
              xs={12}
              style={{
                padding: "20px",
                maxHeight: "600px",
                overflow: "scroll"
              }}
            >
              <Modal.Header
                closeButton
                style={{ borderBottom: "0px", padding: "0px" }}
              />
              <h3>Aeroly</h3>
              {aerolyChipData.map(chip => {
                return (
                  <Chip
                    key={chip.key}
                    size="small"
                    label={chip.label}
                    style={{ margin: "3px" }}
                    variant="outlined"
                  />
                );
              })}
              <div style={{ margin: "20px 0px" }}>
                <a
                  href="https://github.com/ericlus/Aeroly"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outlined" startIcon={<GitHubIcon />}>
                    Code
                  </Button>
                </a>
              </div>
              <h5 style={{ marginTop: "15px" }}>About</h5>
              <p>
                Aeroly is a flight price tracking application that will get the
                latest deals to any destination. Aeroly uses the Skyscanner API
                to get live results and ticket redirect to the purchasing page.
              </p>
              <p>
                Some of the challenges I faced was using the API to get live
                ticket prices. The API required a x-www-form-urlencoded content
                type in the body, however, I was sending JSON data and was
                receiving a status code of 400. To resolve the issue I had to
                attach a content type header and use a querystring module to
                convert the object in my body to an URI encoded string.
              </p>
              <p>
                Another challenge I faced was creating the destination search
                input to continually find related destinations while the user
                types in a string. To create the related destination search I
                sent a GET request to the API whenever the search input changes
                to get an array of related destinations. I then used bootstrap
                dynamically render the array of values as selectable entries
                that will auto fill the search when clicked.
              </p>
              <Paper className={classes.imagePaper}>
                <img className={classes.image} src={AerolyScreenshot1} />
              </Paper>
              <Paper className={classes.imagePaper}>
                <img className={classes.image} src={AerolyScreenshot2} />
              </Paper>
              <Paper className={classes.imagePaper}>
                <img className={classes.image} src={AerolyScreenshot3} />
              </Paper>
              <Paper className={classes.imagePaper}>
                <img className={classes.image} src={AerolyScreenshot4} />
              </Paper>
            </Grid>
          </Grid>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AerolyModal;
