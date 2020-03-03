import React, { useState, useEffect } from "react";
import styles from "./Projects.module.scss";

const Projects = props => {
  // const [fade, setFade] = useState(null);

  // useEffect(() => {
  //   if (props.animate === "right") {
  //     setFade(styles.fadeInRight);
  //   } else if (props.animate === "left") {
  //     setFade(styles.fadeInLeft);
  //   } else {
  //     setFade(null);
  //   }
  // }, [props]);

  return (
    //<main className={fade}>
    <article className={styles.article}>Projects</article>
    //</main>
  );
};

export default Projects;
