import React from 'react';
import styles from '../css/Project.module.css';
const Projects = () => {
   return (
      <section className={styles.projects} id='projects'>
         <h1 className={styles.header}>Projects</h1>
         <ul className={styles.projectList}>
            <li>
               <div className={styles.text}>
                  <h3>Valoguesser</h3>
                  <p>this is a block of text</p>
                  <p>for url</p>
               </div>
               <img
                  className={styles.image}
                  src='https://res.cloudinary.com/dna7c2j1e/image/upload/v1673123693/Portfolio/Screenshot_2023-01-07_143431_cezgrq.png'
                  alt='this is the valoguesser game image'
                  draggable='false'
               />
            </li>
            <li>
               <div className={styles.text}>
                  <h3>Bartender&rsquo;s companion</h3>
                  <p>this is a block of text</p>
                  <p>for url</p>
               </div>
               <img
                  className={styles.image}
                  src='https://res.cloudinary.com/dna7c2j1e/image/upload/v1673125879/Portfolio/Screenshot_2023-01-07_151054_b94r6s.png'
                  alt='this is the bartender companion image'
                  draggable='false'
               />
            </li>
         </ul>
      </section>
   );
};

export default Projects;

