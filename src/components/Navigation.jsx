import React, { useRef, useEffect } from 'react';
import styles from '../css/Nav.module.css';
const Navigation = () => {
   // use this ref to change the opacity of the navbar when scrolling
   const navRef = useRef();
   const previousPos = useRef(window.scrollY);

   const handleScroll = () => {
      let currentPos = window.scrollY;
      if (previousPos.current < currentPos) {
         navRef.current.style.opacity = 0;
         navRef.current.style.transform = 'translate(-50%, -300px)';
      } else {
         navRef.current.style.opacity = 1;
         navRef.current.style.transform = 'translate(-50%, 1%)';
      }
      previousPos.current = currentPos;
   };
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      () => window.removeEventListener('scroll', handleScroll);
   }, []);
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

