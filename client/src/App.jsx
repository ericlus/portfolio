import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "./NavigationBar.jsx";
import Wallpaper from "../images/wallpaper.png";
import HomeInfo from "./HomeInfo.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";

const App = () => {
  const [view, setView] = useState("HOME");

  const pageView = {
    HOME: <HomeInfo />,
    ABOUT: <About />,
    PROJECTS: <Projects />,
    RESUME: <Resume />,
    CONTACT: <Contact />
  };

  const changeView = view => {
    setView(view);
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${Wallpaper})`,
          backgroundSize: "cover"
        }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={10}>
            <div>
              <NavigationBar changeView={changeView} view={view} />
              {pageView[view]}
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
