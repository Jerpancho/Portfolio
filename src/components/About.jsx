/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '../css/About.module.css';

const About = () => {
   return (
      <section className={styles.about} id='about'>
         <h1 className={styles.header}>About Me</h1>
         <p className={styles.description}>
            Highly passionate computer scientist who emphasizes in creating
            efficient applications for the web. Proficient in HTML,CSS, and
            javascript with experience in developing and deploying web
            application using frameworks such as React and Express. I graduated
            from the University of Texas at Rio Grande Valley with a Bachelor's
            Degree in Computer Science holding knowledge of data structures and
            algorithm, Object-oriented programming, and software development
            techniques fitted for agile development. Searching for an entry to
            junior level position that will utilize and nurture my skills in a
            professional environment.
         </p>
      </section>
   );
};

export default About;

