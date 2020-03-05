import React, { useState, useEffect } from "react";
import styles from "./Summary.module.scss";

const Summary = props => {
  return (
    <article className={styles.article}>
      <div className={styles.profile}>
        <img src="profile-pic.jpg" alt="profile_picture"></img>
        <div>
          <h2>Summary</h2>
          <p>
            I am pivoting to a career in web development after four years in the
            construction industry where I worked as a Civil Engineer and Project
            Manager. I gained valuable experience leading projects from
            inception to completion while managing people, timelines and
            budgets.
            <br></br>
            <br></br>I began web development as a hobby two years ago, and it
            became my passion as I learned new and varied technologies and
            applied them to personal projects. I decided to pursue my passion
            full time at the Lighthouse Labs coding bootcamp, to deepen my
            knowledge and skills as a full stack web developer.
          </p>
        </div>
        <div>
          <h2>Favourite Stack (currently)</h2>
          <p>
            My current favourite tech stack is composed of a single page React
            front-end with a Node and Express decoupled back-end. In my final
            project at Lighthouse Labs, I used this stack to develop a dynamic
            matchmaking dating application called ‘ThirdWheel’, which intended
            to gamify the role of the matchmaker. Next on my programming study
            to-do list is to dive deeper into the React Library, as well as to
            explore the Python and Django back-end.
          </p>
        </div>
      </div>
      <div></div>
    </article>
  );
};

export default Summary;
