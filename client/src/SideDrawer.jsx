import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import CodeIcon from "@material-ui/icons/Code";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  drawerRight: {
    marginLeft: "auto"
  },
  paper: {
    height: "33%"
  },
  icons: {
    marginRight: "32px"
  },
  listColor: {
    color: "rgba(0, 0, 0, 0.87)",
    "&:hover": {
      textDecoration: "none",
      color: "rgba(0, 0, 0, 0.87)"
    }
  }
});

const SideDrawer = ({ handleClick }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <a href="#About" className={classes.listColor}>
          <ListItem button>
            <PersonIcon className={classes.icons} />
            <ListItemText primary={"About"} />
          </ListItem>
        </a>
        <a href="#Skills" className={classes.listColor}>
          <ListItem button>
            <CodeIcon className={classes.icons} />
            <ListItemText primary={"Skills"} />
          </ListItem>
        </a>
        <a href="#Projects" className={classes.listColor}>
          <ListItem button>
            <CropOriginalIcon className={classes.icons} />
            <ListItemText primary={"Projects"} />
          </ListItem>
        </a>
        <a href="#Contact" className={classes.listColor}>
          <ListItem button>
            <MailIcon className={classes.icons} />
            <ListItemText primary={"Contact"} />
          </ListItem>
        </a>
        <a href="/resume" target="_blank" className={classes.listColor}>
          <ListItem button>
            <PictureAsPdfIcon className={classes.icons} />
            <ListItemText primary={"Resume"} />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div className={classes.drawerRight}>
      <IconButton
        style={{ color: "white" }}
        onClick={toggleDrawer("right", true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        classes={{ paper: classes.paper }}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
};

export default SideDrawer;
