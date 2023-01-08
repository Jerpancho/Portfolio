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
                  <p>
                     A web game that teaches Valorant players map locations and
                     callouts through a series of 5 rounds where players must
                     locate an image on a map within a time limit and earn a
                     higher score by being closer to the correct location.
                  </p>
                  <ul className={styles.source}>
                     <li>
                        live:&nbsp;
                        <a
                           href='https://valoguesser.netlify.com'
                           target='_blank'
                           rel='noreferrer'
                        >
                           https://valoguesser.netlify.com
                        </a>
                     </li>
                     <li>
                        src:&nbsp;
                        <a
                           href='https://github.com/Jerpancho/valoguesser-client'
                           target='_blank'
                           rel='noreferrer'
                        >
                           https://github.com/Jerpancho/valoguesser-client
                        </a>
                     </li>
                  </ul>
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
                  <p>
                     A mobile application built to be a bartender&rsquo;s best
                     friend for learning and finding new cocktail recipes. The
                     application includes several features such as a search
                     filter, inventory to browse cocktails based on ingredients
                     you own, and a dictionary for new bartenders to learn about
                     the tools and terms of the craft.
                  </p>
                  <ul className={styles.source}>
                     <li>
                        live:&nbsp;
                        <a
                           href='https://github.com/Jerpancho/Bartender-Project'
                           target='_blank'
                           rel='noreferrer'
                        >
                           https://github.com/Jerpancho/Bartender-Project
                        </a>
                     </li>
                  </ul>
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

