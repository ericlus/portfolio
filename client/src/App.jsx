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

  const changeView = view => {
    setView(view);
  };

  // const handleScroll = event => {
  //   if (window.scrollY >= 714) {
  //     setNavState(true);
  //   }
  //   if (window.scrollY < 714) {
  //     setNavState(false);
  //   }
  //   if (window.scrollY >= 0 && window.scrollY < 765) {
  //     setView("HOME");
  //   }
  //   if (window.scrollY >= 765 && window.scrollY < 1349) {
  //     setView("ABOUT");
  //   }
  //   if (window.scrollY >= 1349 && window.scrollY < 2331) {
  //     setView("SKILLS");
  //   }
  //   if (window.scrollY >= 2331 && window.scrollY < 2930) {
  //     setView("PROJECTS");
  //   }
  //   if (window.scrollY >= 2930) {
  //     setView("CONTACT");
  //   }
  // };

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

  useEffect(() => {
    const home = document.querySelector("#Home");
    const about = document.querySelector("#About");
    const skills = document.querySelector("#Skills");
    const projects = document.querySelector("#Projects");
    const homeHeight = home.getBoundingClientRect().height;
    const aboutHeight = about.getBoundingClientRect().height;
    const skillsHeight = skills.getBoundingClientRect().height;
    const projectsHeight = projects.getBoundingClientRect().height;

    window.addEventListener(
      "scroll",
      () => handleScroll(homeHeight, aboutHeight, skillsHeight, projectsHeight),
      false
    );
  }, []);

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
              />
              <HomeInfo />
            </Grid>
          </Grid>
        </div>
      </section>
      <section id="About" style={{ padding: "120px 0px" }}>
        <About />
      </section>
      <section
        id="Skills"
        style={{ padding: "120px 0px", backgroundColor: "#f5f5f7" }}
      >
        <Skills />
      </section>
      <section id="Projects" style={{ padding: "120px 0px" }}>
        <Projects />
      </section>
      <section
        id="Contact"
        style={{ padding: "120px 0px", backgroundColor: "#f5f5f7" }}
      >
        <Contact />
      </section>
      <section style={{ padding: "75px", backgroundColor: "#242424" }}>
        <Footer />
      </section>
    </div>
  );
};

export default App;
