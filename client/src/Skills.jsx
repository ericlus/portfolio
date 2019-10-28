import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faCode,
  faTasks,
  faSitemap
} from "@fortawesome/free-solid-svg-icons";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 3),
    width: "250px"
  },
  subHeader: {
    textAlign: "center",
    marginBottom: "15px"
  },
  icons: {
    fontSize: "30px",
    marginBottom: "15px"
  },
  subSection: {
    textAlign: "center",
    margin: "60px 30px"
  }
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          style={{ fontWeight: "100", marginBottom: "15px" }}
        >
          Skills
        </Typography>
        <Divider
          variant="middle"
          style={{ backgroundColor: "brown", margin: "auto", width: "10%" }}
        />
        <Typography style={{ margin: "80px 200px 40px", fontSize: "18px" }}>
          My main programming language is JavaScript and all the{" "}
          <Link href="#Projects" style={{ cursor: "pointer", color: "brown" }}>
            projects
          </Link>{" "}
          I have developed uses a combination of the technologies listed below.
          When working on a project I follow an Agile/Scrum development process
          where features and implementations are broken down into sprints or
          timed intervals to continually provide deliverables to the client.
          Daily standup meetings are conducted to evaluate the progress and
          potential changes to the project.
        </Typography>
      </Grid>

      <Grid item className={classes.subSection}>
        <FontAwesomeIcon icon={faCode} className={classes.icons} />
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.subHeader}>
            Front End
          </Typography>

          <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Javascript (ES6+)" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="HTML5/CSS3" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="React/Redux" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Material-UI/Bootstrap" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="jQuery" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.subSection}>
        <FontAwesomeIcon icon={faDatabase} className={classes.icons} />
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.subHeader}>
            Back End
          </Typography>
          <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Node/Express" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="PostgreSQL" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="MySQL" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="MongoDB" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Restful API" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.subSection}>
        <FontAwesomeIcon icon={faTasks} className={classes.icons} />
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.subHeader}>
            Testing
          </Typography>
          <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Mocha/Chai" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Jest" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Enzyme" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Travis CI" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item className={classes.subSection}>
        <FontAwesomeIcon icon={faSitemap} className={classes.icons} />
        <Paper className={classes.root}>
          <Typography variant="h5" className={classes.subHeader}>
            Other
          </Typography>
          <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Docker/Docker Swarm" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="AWS" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Heroku" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Webpack" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="TDD" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Git" />
            </ListItem>
            <ListItem>
              <ArrowRightRoundedIcon />
              <ListItemText primary="Agile/Scrum" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Skills;
