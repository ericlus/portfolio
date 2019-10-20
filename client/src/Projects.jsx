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

const ClothesyModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          // style={{ textAlign: "center", width: "100%" }}
        >
          Clothesy
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
};

const ClothesyAPIModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Clothesy API
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
  );
};

const AerolyModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aeroly</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
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
