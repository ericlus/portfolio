import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import HomeWallpaper from "../images/wallpaper.png";
import Modal from "react-bootstrap/Modal";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  card: {
    width: 400
  },
  media: {
    height: 300
  },
  gridSpace: {
    margin: "60px 20px"
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
        <Grid container>
          <Grid
            item
            xs={6}
            style={{
              backgroundImage: `url(${HomeWallpaper})`,
              backgroundSize: "cover",
              height: "500px",
              width: "700px"
            }}
          ></Grid>
          <Grid item xs={6} style={{ padding: "20px" }}>
            <Modal.Header
              closeButton
              style={{ borderBottom: "0px", padding: "0px" }}
            />
            <h3>Clothesy</h3>
            {clothesyChipData.map(chip => {
              return (
                <Chip
                  key={chip.key}
                  label={chip.label}
                  style={{ margin: "3px" }}
                  variant="outlined"
                />
              );
            })}
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.Cras mattis consectetur
              purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              eros.
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
        <Grid container>
          <Grid
            item
            xs={6}
            style={{
              backgroundImage: `url(${HomeWallpaper})`,
              backgroundSize: "cover",
              height: "500px",
              width: "700px"
            }}
          ></Grid>
          <Grid item xs={6} style={{ padding: "20px" }}>
            <Modal.Header
              closeButton
              style={{ borderBottom: "0px", padding: "0px" }}
            />
            <h3>Clothesy API</h3>
            {clothesyAPIChipData.map(chip => {
              return (
                <Chip
                  key={chip.key}
                  label={chip.label}
                  style={{ margin: "3px" }}
                  variant="outlined"
                />
              );
            })}
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.Cras mattis consectetur
              purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              eros.
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
        <Grid container>
          <Grid
            item
            xs={6}
            style={{
              backgroundImage: `url(${HomeWallpaper})`,
              backgroundSize: "cover",
              height: "500px",
              width: "700px"
            }}
          ></Grid>
          <Grid item xs={6} style={{ padding: "20px" }}>
            <Modal.Header
              closeButton
              style={{ borderBottom: "0px", padding: "0px" }}
            />
            <h3>Aeroly</h3>
            {aerolyChipData.map(chip => {
              return (
                <Chip
                  key={chip.key}
                  label={chip.label}
                  style={{ margin: "3px" }}
                  variant="outlined"
                />
              );
            })}
            <h5 style={{ marginTop: "15px" }}>About</h5>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.Cras mattis consectetur
              purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
              eros.
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
        <Card className={classes.card}>
          <CardActionArea onClick={() => setClothesyShow(true)}>
            <CardMedia className={classes.media} image={HomeWallpaper} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => setClothesyAPIShow(true)}>
            <CardMedia className={classes.media} image={HomeWallpaper} />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => setAerolyShow(true)}>
            <CardMedia className={classes.media} image={HomeWallpaper} />
          </CardActionArea>
        </Card>
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
