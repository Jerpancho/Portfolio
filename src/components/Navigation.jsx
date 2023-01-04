import React, { useRef } from 'react';
import styles from '../css/Nav.module.css';
const Navigation = () => {
   // use this ref to change the opacity of the navbar when scrolling
   const navRef = useRef();
   return (
      <nav className={styles.nav} ref={navRef}>
         <ul className={styles.list}>
            <li>
               <a href='#home'>Home</a>
            </li>
            <li>
               <a href='#about'>About</a>
            </li>
            <li>
               <a href='#skills'>Skills</a>
            </li>
            <li>
               <a href='#projects'>Projects</a>
            </li>
            <li>
               <a href='#contacts'>Contacts</a>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;

