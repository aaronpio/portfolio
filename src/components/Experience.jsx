import React, { useEffect, useState } from "react";
import styles from "./Experience.module.scss";

const Experience = props => {
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
    // <main className={fade}>
    <article className={styles.article}>Experience</article>
    //</main>
  );
};

export default Experience;
