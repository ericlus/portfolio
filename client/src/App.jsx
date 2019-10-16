import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "./NavigationBar.jsx";
import HomeWallpaper from "../images/wallpaper.png";
import HomeInfo from "./HomeInfo.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";

const App = () => {
  const [view, setView] = useState("HOME");

  const pageView = {
    HOME: <HomeInfo />,
    ABOUT: <About />,
    PROJECTS: <Projects />,
    RESUME: <Resume />,
    CONTACT: <Contact />
  };

  const background = {
    HOME: {
      height: "100vh",
      backgroundImage: `url(${HomeWallpaper})`,
      backgroundSize: "cover"
    }
  };

  const changeView = view => {
    setView(view);
  };

  return (
    <div>
      <section>
        <div style={background[view]}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10}>
              <div>
                <NavigationBar changeView={changeView} />
                {pageView[view]}
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
      <section style={{ padding: "75px 0px" }}>
        <About />
      </section>
      <section style={{ padding: "75px 0px", backgroundColor: "#f5f5f7" }}>
        <Skills />
      </section>
      <section style={{ padding: "75px 0px" }}>
        <Projects />
      </section>
      <section style={{ padding: "75px 0px", backgroundColor: "#f5f5f7" }}>
        <Contact />
      </section>
    </div>
  );
};

export default App;
