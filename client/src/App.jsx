import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import NavigationBar from "./NavigationBar.jsx";
import HomeWallpaper from "../images/wallpaper.png";
import HomeInfo from "./HomeInfo.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  const [view, setView] = useState("HOME");
  const [navState, setNavState] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const changeView = view => {
    setView(view);
  };

  const handleScroll = (
    homeHeight,
    aboutHeight,
    skillsHeight,
    projectsHeight
  ) => {
    if (window.scrollY >= homeHeight) {
      setNavState(true);
    }
    if (window.scrollY < homeHeight) {
      setNavState(false);
    }
    if (window.scrollY >= 0 && window.scrollY < homeHeight) {
      setView("HOME");
    }
    if (
      window.scrollY >= homeHeight &&
      window.scrollY < homeHeight + aboutHeight
    ) {
      setView("ABOUT");
    }
    if (
      window.scrollY >= homeHeight + aboutHeight &&
      window.scrollY < homeHeight + aboutHeight + skillsHeight
    ) {
      setView("SKILLS");
    }
    if (
      window.scrollY >= homeHeight + aboutHeight + skillsHeight - 1 &&
      window.scrollY < homeHeight + aboutHeight + skillsHeight + projectsHeight
    ) {
      setView("PROJECTS");
    }
    if (
      window.scrollY >=
      homeHeight + aboutHeight + skillsHeight + projectsHeight - 1
    ) {
      setView("CONTACT");
    }
  };

  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };

  useEffect(() => {
    const home = document.querySelector("#Home");
    const about = document.querySelector("#About");
    const skills = document.querySelector("#Skills");
    const projects = document.querySelector("#Projects");
    const homeHeight = home.getBoundingClientRect().height;
    const aboutHeight = about.getBoundingClientRect().height;
    const skillsHeight = skills.getBoundingClientRect().height;
    const projectsHeight = projects.getBoundingClientRect().height;

    window.addEventListener("scroll", () =>
      handleScroll(homeHeight, aboutHeight, skillsHeight, projectsHeight)
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(homeHeight, aboutHeight, skillsHeight, projectsHeight)
      );
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div id="main">
      <section id="Home">
        <div
          style={{
            height: "100vh",
            backgroundImage: `url(${HomeWallpaper})`,
            backgroundSize: "cover"
          }}
        >
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={10}>
              <NavigationBar
                changeView={changeView}
                view={view}
                navState={navState}
                viewWidth={viewWidth}
              />
            </Grid>
            <HomeInfo />
          </Grid>
        </div>
      </section>
      <section
        id="About"
        style={{ padding: "120px 0px", maxWidth: "1440px", margin: "auto" }}
      >
        <About />
      </section>
      <section
        id="Skills"
        style={{
          padding: "120px 0px",
          backgroundColor: "#f5f5f7"
        }}
      >
        <Skills />
      </section>
      <section
        id="Projects"
        style={{ padding: "120px 0px", maxWidth: "1440px", margin: "auto" }}
      >
        <Projects viewWidth={viewWidth} />
      </section>
      <section
        id="Contact"
        style={{
          padding: "140px 0px",
          backgroundColor: "#f5f5f7"
        }}
      >
        <Contact />
      </section>
      <section
        style={{
          padding: "145px 0px",
          backgroundColor: "#242424"
        }}
      >
        <Footer />
      </section>
    </div>
  );
};

export default App;
