import React, { useState, useEffect } from "react";
import styles from "./App.scss";
import Nav from "./components/Nav";
import Summary from "./components/Summary";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

const App = () => {
  const [screen, setScreen] = useState("About");
  const [fade, setFade] = useState(null);

  const buttonNames = ["About", "Projects", "Education", "Experience"];

  const navButtonPress = newScreen => {
    const indexOfOldScreen = buttonNames.indexOf(screen);
    const indexOfNewScreen = buttonNames.indexOf(newScreen);

    if (indexOfOldScreen < 0 || indexOfNewScreen < 0) {
      setFade(null);
    } else if (indexOfOldScreen < indexOfNewScreen) {
      setFade("fadeInRight");
    } else if (indexOfOldScreen > indexOfNewScreen) {
      setFade("fadeInLeft");
    }
    setScreen(newScreen);
  };

  useEffect(() => {
    setTimeout(() => {
      setFade(null);
    }, 500);
  }, [screen]);

  return (
    <body id="style_bar">
      <Nav
        buttonNames={buttonNames}
        screen={screen}
        changeScreen={navButtonPress}
      />
      <main id={fade}>
        {screen === "About" && <Summary />}
        {screen === "Projects" && <Projects />}
        {screen === "Experience" && <Experience />}
        {screen === "Education" && <Education />}
      </main>
      {/* <Footer /> */}
    </body>
  );
};

export default App;
