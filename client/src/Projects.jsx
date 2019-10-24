import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Modal from "react-bootstrap/Modal";
import Chip from "@material-ui/core/Chip";
import ClothesyThumbnail from "../images/clothesy.png";
import ClothesyScreenshot1 from "../images/clothesy1.png";
import ClothesyScreenshot2 from "../images/clothesy2.png";
import ClothesyScreenshot3 from "../images/clothesy3.png";
import ClothesyAPIScreenshot1 from "../images/api1.png";
import ClothesyAPIScreenshot2 from "../images/api2.png";
import ClothesyAPIScreenshot3 from "../images/api3.png";
import ClothesyAPIScreenshot4 from "../images/api4.png";
import AerolyScreenshot1 from "../images/aeroly1.png";
import AerolyScreenshot2 from "../images/aeroly2.png";
import AerolyScreenshot3 from "../images/aeroly3.png";
import AerolyScreenshot4 from "../images/aeroly4.png";
import ClothesyAPIThumbnail from "../images/clothesyAPI.png";
import AerolyThumbnail from "../images/aeroly.png";
import ProjectImages from "./ProjectImages.jsx";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  card: {
    width: 400,
    height: 300,
    overflow: "hidden"
  },
  media: {
    height: 300
  },
  gridSpace: {
    margin: "60px 20px"
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    paddingTop: "125px",
    textAlign: "center",
    height: "300px",
    width: "400px",
    opacity: 0,
    color: "white",
    transition: "all 0.2s ease-in-out 0s",
    "&:hover": {
      opacity: 1
    }
  }
});

const clothesyChipData = [
  { key: 0, label: "React" },
  { key: 1, label: "Redux" },
  { key: 2, label: "CSS3" },
  { key: 3, label: "Material-UI" },
  { key: 4, label: "Bootstrap" }
];
const clothesyAPIChipData = [
  { key: 0, label: "PostgreSQL" },
  { key: 1, label: "Express" },
  { key: 2, label: "Docker" },
  { key: 3, label: "Docker Swarm" },
  { key: 4, label: "AWS" },
  { key: 5, label: "HAProxy" }
];
const aerolyChipData = [
  { key: 0, label: "React" },
  { key: 1, label: "Express" },
  { key: 2, label: "CSS3" },
  { key: 3, label: "Moment" },
  { key: 4, label: "Material-UI" },
  { key: 5, label: "Bootstrap" }
];

const ClothesyModal = props => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ padding: "0px" }}>
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
            style={{ padding: "20px", maxHeight: "600px", overflow: "scroll" }}
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
              <Button variant="outlined" startIcon={<GitHubIcon />}>
                Code
              </Button>
            </div>
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Clothesy is a shopping application that mimics well known shopping
              sites' product information page where data was dynamically
              rendered from a pre-exisiting API. Clothesy was built in a team of
              4 using the Agile/Scrum methodology where daily standup meetings
              were conducted to evaluate what was accomplished and needed to
              improve based on the planned goals. I worked on the product
              overview section for Clothesy, which plays the role of displaying
              the product in a way of capturing the attention of the consumer.
            </p>
            <p>
              Some of the challenges I faced was managing time by having a
              balance between investigating/utilizing new technologies while
              also meeting the business requirement documents within the
              specified deadline. To resolve this issue I used Trello, a
              ticketing system, to track daily progress by creating tickets for
              investigation and feature implementation.
            </p>
            <p>
              Another challenge I faced was working with two different css
              styling frameworks, Bootstrap and Material-UI. I used Bootstrap to
              create the image carousel and managed the changing of the images
              through the state in a class based component, however,
              Material-UI's styling function requires a functional component. To
              resolve this issue I had to learn React Hooks and refactor the
              class based component to a functional component in order to use
              both Bootstrap and Material-UI.
            </p>
          </Grid>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

const ClothesyAPIModal = props => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ padding: "0px" }}>
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
            style={{ padding: "20px", maxHeight: "600px", overflow: "scroll" }}
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
              <Button variant="outlined" startIcon={<GitHubIcon />}>
                Code
              </Button>
            </div>
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Clothesy API is a redesigned API for Clothesy that is optimized
              for HTTP response times and requests per second (RPS). I worked on
              the questions and answers API where I was given an unfamiliar
              front end code base and large csv files (20 million rows) to build
              a node server, design the schema and load a PostgreSQL database.
              The server and database was then deployed on an AWS EC2 instance
              to be accessed by Clothesy front end.
            </p>
            <p>
              Some of the challenges I faced was finding a way to optimize
              database query speeds. The initial speed to query across three
              tables to find a all the questions, answers, and photos related to
              a specific product id was around 22 s. To resolve this issue I
              indexed the foreign keys for each table and used aggregate
              functions to reduce the query speed to 4 ms.
            </p>
            <p>
              Another challenge I had was finding out a way to handle more
              requests or increase RPS. My initial API was setup through using
              Docker compose to run both the node server and PostgreSQL database
              in one EC2 instance. The maximum RPS, obtained from Loader.io, the
              API can handle without encountering any errors was 100 with an
              average response time of 812 ms. To increase RPS, I decided to
              separate the server from the database and scale the server by
              using more EC2 instances. I used Docker Swarm to connect the
              servers through an overlay network and HAProxy to serve as an
              external load balancer to distribute requests across my servers.
              The maximum RPS increased to 2000 with an error rate of 0% and an
              average response time of 32 ms.
            </p>
          </Grid>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

const AerolyModal = props => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body style={{ padding: "0px" }}>
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
            style={{ padding: "20px", maxHeight: "600px", overflow: "scroll" }}
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
              <Button variant="outlined" startIcon={<GitHubIcon />}>
                Code
              </Button>
            </div>
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Aeroly is a flight price tracking application that will get the
              latest deals to any destination. Aeroly uses the Skyscanner API to
              get live results and ticket redirect to the purchasing page.
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
              types in a string. To create the related destination search I sent
              a GET request to the API whenever the search input changes to get
              an array of related destinations. I then used bootstrap
              dynamically render the array of values as selectable entries that
              will auto fill the search when clicked.
            </p>
          </Grid>
        </Grid>
      </Modal.Body>
    </Modal>
  );
};

const Projects = () => {
  const classes = useStyles();
  const [clothesyShow, setClothesyShow] = React.useState(false);
  const [clothesyAPIShow, setClothesyAPIShow] = React.useState(false);
  const [aerolyShow, setAerolyShow] = React.useState(false);

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "100", marginBottom: "15px" }}
        >
          Projects
        </Typography>
        <Divider
          variant="middle"
          style={{ backgroundColor: "brown", margin: "auto", width: "10%" }}
        />
      </Grid>
      <Grid item className={classes.gridSpace}>
        <div className={classes.card} onClick={() => setClothesyShow(true)}>
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" style={{ fontWeight: "100" }}>
                Clothesy
              </Typography>
            </div>
            <img
              style={{ height: "300px", paddingLeft: "50px" }}
              src={ClothesyThumbnail}
            ></img>
          </a>
        </div>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <div className={classes.card} onClick={() => setClothesyAPIShow(true)}>
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" style={{ fontWeight: "100" }}>
                Clothesy API
              </Typography>
            </div>
            <img
              style={{ height: "300px", paddingLeft: "50px" }}
              src={ClothesyAPIThumbnail}
            ></img>
          </a>
        </div>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <div className={classes.card} onClick={() => setAerolyShow(true)}>
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" style={{ fontWeight: "100" }}>
                Aeroly
              </Typography>
            </div>
            <img
              style={{ height: "300px", paddingLeft: "50px" }}
              src={AerolyThumbnail}
            ></img>
          </a>
        </div>
      </Grid>
      <ClothesyModal
        show={clothesyShow}
        onHide={() => setClothesyShow(false)}
      />
      <ClothesyAPIModal
        show={clothesyAPIShow}
        onHide={() => setClothesyAPIShow(false)}
      />
      <AerolyModal show={aerolyShow} onHide={() => setAerolyShow(false)} />
    </Grid>
  );
};

export default Projects;
