import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ClothesyThumbnail from "../images/clothesy.png";
import ClothesyAPIThumbnail from "../images/clothesyAPI.png";
import AerolyThumbnail from "../images/aeroly.png";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ClothesyAPIModal from "./ClothesyAPIModal.jsx";
import ClothesyModal from "./ClothesyModal.jsx";
import AerolyModal from "./AerolyModal.jsx";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 300
  },
  gridSpace: {
    margin: "80px 60px"
  },
  overlay: {
    background: "white",
    position: "absolute",
    paddingTop: "90px",
    textAlign: "center",
    height: "300px",
    width: "300px",
    opacity: 0,
    color: "white",
    transition: "all 0.3s ease-in-out 0s",
    "&:hover": {
      opacity: 1
    }
  },
  thumbnails: { height: "200px", width: "200px", margin: "45px 50px" },
  contentOverlay: {
    fontWeight: "100",
    color: "black"
  },
  buttonOverlay: {
    backgroundColor: "white",
    margin: "30px",
    borderColor: "brown"
  }
});

const Projects = ({ viewWidth }) => {
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
        <Paper className={classes.card} onClick={() => setClothesyShow(true)}>
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" className={classes.contentOverlay}>
                Clothesy
              </Typography>
              <Button variant="outlined" className={classes.buttonOverlay}>
                Learn More
              </Button>
            </div>
            <img className={classes.thumbnails} src={ClothesyThumbnail}></img>
          </a>
        </Paper>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <Paper
          className={classes.card}
          onClick={() => setClothesyAPIShow(true)}
        >
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" className={classes.contentOverlay}>
                Clothesy API
              </Typography>
              <Button variant="outlined" className={classes.buttonOverlay}>
                Learn More
              </Button>
            </div>
            <img
              className={classes.thumbnails}
              src={ClothesyAPIThumbnail}
            ></img>
          </a>
        </Paper>
      </Grid>
      <Grid item className={classes.gridSpace}>
        <Paper className={classes.card} onClick={() => setAerolyShow(true)}>
          <a style={{ cursor: "pointer" }}>
            <div className={classes.overlay}>
              <Typography variant="h4" className={classes.contentOverlay}>
                Aeroly
              </Typography>
              <Button variant="outlined" className={classes.buttonOverlay}>
                Learn More
              </Button>
            </div>
            <img className={classes.thumbnails} src={AerolyThumbnail}></img>
          </a>
        </Paper>
      </Grid>
      <ClothesyModal
        show={clothesyShow}
        onHide={() => setClothesyShow(false)}
        viewwidth={viewWidth}
      />
      <ClothesyAPIModal
        show={clothesyAPIShow}
        onHide={() => setClothesyAPIShow(false)}
        viewwidth={viewWidth}
      />
      <AerolyModal
        show={aerolyShow}
        onHide={() => setAerolyShow(false)}
        viewwidth={viewWidth}
      />
    </Grid>
  );
};

export default Projects;
