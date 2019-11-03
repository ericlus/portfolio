import React from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "react-bootstrap/Modal";
import Chip from "@material-ui/core/Chip";
import ProjectImages from "./ProjectImages.jsx";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import ClothesyAPIScreenshot1 from "../images/api1.png";
import ClothesyAPIScreenshot2 from "../images/api2.png";
import ClothesyAPIScreenshot3 from "../images/api3.png";
import ClothesyAPIScreenshot4 from "../images/api4.png";
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

const ClothesyAPIModal = props => {
  const classes = useStyles();
  const clothesyAPIChipData = [
    { key: 0, label: "PostgreSQL" },
    { key: 1, label: "Express" },
    { key: 2, label: "Docker" },
    { key: 3, label: "Docker Swarm" },
    { key: 4, label: "AWS" },
    { key: 5, label: "HAProxy" }
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
          <Grid container alignItems="center">
            <Grid item xs={8}>
              <ProjectImages
                pictures={[
                  ClothesyAPIScreenshot4,
                  ClothesyAPIScreenshot3,
                  ClothesyAPIScreenshot1,
                  ClothesyAPIScreenshot2
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
              <h3>Clothesy API</h3>
              {clothesyAPIChipData.map(chip => {
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
                  href="https://github.com/ericlus/Clothesy-API"
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
                Clothesy API is a redesigned API for Clothesy that is optimized
                for HTTP response times and requests per second (RPS). I worked
                on the questions and answers API where I was given an unfamiliar
                front end code base and large csv files (20 million rows) to
                build a node server, design the schema and load a PostgreSQL
                database. The server and database was then deployed on an AWS
                EC2 instance to be accessed by Clothesy front end.
              </p>
              <p>
                Some of the challenges I faced was finding a way to optimize
                database query speeds. The initial speed to query across three
                tables to find all the questions, answers, and photos related to
                a specific product id was around 22 s. To resolve this issue I
                indexed the foreign keys for each table and used aggregate
                functions to reduce the query speed to 4 ms.
              </p>
              <p>
                Another challenge I had was finding out a way to handle more
                requests or increase RPS. My initial API was setup through using
                Docker compose to run both the node server and PostgreSQL
                database in one EC2 instance. The maximum RPS, obtained from
                Loader.io, the API can handle without encountering any errors
                was 100 with an average response time of 812 ms. To increase
                RPS, I decided to separate the server from the database and
                scale the server by using more EC2 instances. I used Docker
                Swarm to connect the servers through an overlay network and
                HAProxy to serve as an external load balancer to distribute
                requests across my servers. The maximum RPS increased to 2000
                with an error rate of 0% and an average response time of 32 ms.
              </p>
            </Grid>
          </Grid>
        ) : (
          <Grid container alignItems="center">
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
              <h3>Clothesy API</h3>
              {clothesyAPIChipData.map(chip => {
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
                  href="https://github.com/ericlus/Clothesy-API"
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
                Clothesy API is a redesigned API for Clothesy that is optimized
                for HTTP response times and requests per second (RPS). I worked
                on the questions and answers API where I was given an unfamiliar
                front end code base and large csv files (20 million rows) to
                build a node server, design the schema and load a PostgreSQL
                database. The server and database was then deployed on an AWS
                EC2 instance to be accessed by Clothesy front end.
              </p>
              <p>
                Some of the challenges I faced was finding a way to optimize
                database query speeds. The initial speed to query across three
                tables to find all the questions, answers, and photos related to
                a specific product id was around 22 s. To resolve this issue I
                indexed the foreign keys for each table and used aggregate
                functions to reduce the query speed to 4 ms.
              </p>
              <p>
                Another challenge I had was finding out a way to handle more
                requests or increase RPS. My initial API was setup through using
                Docker compose to run both the node server and PostgreSQL
                database in one EC2 instance. The maximum RPS, obtained from
                Loader.io, the API can handle without encountering any errors
                was 100 with an average response time of 812 ms. To increase
                RPS, I decided to separate the server from the database and
                scale the server by using more EC2 instances. I used Docker
                Swarm to connect the servers through an overlay network and
                HAProxy to serve as an external load balancer to distribute
                requests across my servers. The maximum RPS increased to 2000
                with an error rate of 0% and an average response time of 32 ms.
              </p>
              <a href="/clothesyAPI/4" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyAPIScreenshot4} />
                </Paper>
              </a>
              <a href="/clothesyAPI/3" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyAPIScreenshot3} />
                </Paper>
              </a>
              <a href="/clothesyAPI/1" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyAPIScreenshot1} />
                </Paper>
              </a>
              <a href="/clothesyAPI/2" target="_blank">
                <Paper className={classes.imagePaper}>
                  <img className={classes.image} src={ClothesyAPIScreenshot2} />
                </Paper>
              </a>
            </Grid>
          </Grid>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ClothesyAPIModal;
