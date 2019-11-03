import React from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "react-bootstrap/Modal";
import Chip from "@material-ui/core/Chip";
import ClothesyScreenshot1 from "../images/clothesy1.png";
import ClothesyScreenshot2 from "../images/clothesy2.png";
import ClothesyScreenshot3 from "../images/clothesy3.png";
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

const ClothesyModal = props => {
  const classes = useStyles();
  const clothesyChipData = [
    { key: 0, label: "React" },
    { key: 1, label: "Redux" },
    { key: 2, label: "CSS3" },
    { key: 3, label: "Material-UI" },
    { key: 4, label: "Bootstrap" }
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
                  ClothesyScreenshot1,
                  ClothesyScreenshot2,
                  ClothesyScreenshot3
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
              <div style={{ display: "flex" }}>
                <h3>Clothesy</h3>
              </div>
              {clothesyChipData.map(chip => {
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
                  href="https://github.com/fecpanther/Clothesy"
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
                Clothesy is a shopping application that mimics well known
                shopping sites' product information page where data was
                dynamically rendered from a pre-exisiting API. Clothesy was
                built in a team of 4 using the Agile/Scrum methodology where
                daily standup meetings were conducted to evaluate what was
                accomplished and needed to improve based on the planned goals. I
                worked on the product overview section for Clothesy, which plays
                the role of displaying the product in a way of capturing the
                attention of the consumer.
              </p>
              <p>
                Some of the challenges I faced was managing time by having a
                balance between investigating/utilizing new technologies while
                also meeting the business requirement documents within the
                specified deadline. To resolve this issue I used Trello, a
                ticketing system, to track daily progress by creating tickets
                for investigation and feature implementation.
              </p>
              <p>
                Another challenge I faced was working with two different css
                styling frameworks, Bootstrap and Material-UI. I used Bootstrap
                to create the image carousel and managed the changing of the
                images through the state in a class based component, however,
                Material-UI's styling function requires a functional component.
                To resolve this issue I had to learn React Hooks and refactor
                the class based component to a functional component in order to
                use both Bootstrap and Material-UI.
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
              <div style={{ display: "flex" }}>
                <h3>Clothesy</h3>
              </div>
              {clothesyChipData.map(chip => {
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
                  href="https://github.com/fecpanther/Clothesy"
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
                Clothesy is a shopping application that mimics well known
                shopping sites' product information page where data was
                dynamically rendered from a pre-exisiting API. Clothesy was
                built in a team of 4 using the Agile/Scrum methodology where
                daily standup meetings were conducted to evaluate what was
                accomplished and needed to improve based on the planned goals. I
                worked on the product overview section for Clothesy, which plays
                the role of displaying the product in a way of capturing the
                attention of the consumer.
              </p>
              <p>
                Some of the challenges I faced was managing time by having a
                balance between investigating/utilizing new technologies while
                also meeting the business requirement documents within the
                specified deadline. To resolve this issue I used Trello, a
                ticketing system, to track daily progress by creating tickets
                for investigation and feature implementation.
              </p>
              <p>
                Another challenge I faced was working with two different css
                styling frameworks, Bootstrap and Material-UI. I used Bootstrap
                to create the image carousel and managed the changing of the
                images through the state in a class based component, however,
                Material-UI's styling function requires a functional component.
                To resolve this issue I had to learn React Hooks and refactor
                the class based component to a functional component in order to
                use both Bootstrap and Material-UI.
              </p>
              <a href="/clothesy/1" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyScreenshot1} />
                </Paper>
              </a>
              <a href="/clothesy/2" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyScreenshot2} />
                </Paper>
              </a>
              <a href="/clothesy/3" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyScreenshot3} />
                </Paper>
              </a>
            </Grid>
          </Grid>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ClothesyModal;
