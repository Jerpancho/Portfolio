import React, { useRef, useEffect, useState } from 'react';
import styles from '../css/Nav.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navigation = () => {
   // use this ref to change the opacity of the navbar when scrolling
   const navRef = useRef();
   const previousPos = useRef(window.scrollY);
   const toggleRef = useRef();
   const [toggle, setToggle] = useState(false);

   const handleScroll = () => {
      let currentPos = window.scrollY;
      if (previousPos.current < currentPos) {
         navRef.current.style.opacity = 0;
         navRef.current.style.transform = 'translate(-50%, -300px)';
         toggleRef.current.style.opacity = 0;
         toggleRef.current.style.transform = 'translateY(-300px)';
      } else {
         navRef.current.style.opacity = 1;
         navRef.current.style.transform = 'translate(-50%, 1%)';
         toggleRef.current.style.opacity = 1;
         toggleRef.current.style.transform = 'none';
      }
      previousPos.current = currentPos;
   };
   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      () => window.removeEventListener('scroll', handleScroll);
   }, []);
   return (
      <div className={styles.navigation}>
         <div
            className={styles.circle}
            onClick={() => setToggle((prev) => !prev)}
            ref={toggleRef}
         >
            {/* icon */}
            <GiHamburgerMenu style={{ color: '#b1ffff' }} />
         </div>
         <nav
            // adding visibility of the nav when toggled on
            className={`${styles.nav} ${toggle ? styles.navOpen : ''}`}
            ref={navRef}
         >
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
      </div>
   );
};

export default Navigation;

