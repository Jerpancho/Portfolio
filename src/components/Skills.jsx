import React from 'react';
import HtmlIcon from './svg/HtmlIcon';
import CssIcon from './svg/CssIcon';
import JsIcon from './svg/JsIcon';
import styles from '../css/Skills.module.css';

const Skills = () => {
   return (
      <section className={styles.skills} id='skills'>
         <div>
            <h3 className={styles.headers}>languages</h3>
            <div className={styles.list}>
               <HtmlIcon />
               <CssIcon />
               <JsIcon />
            </div>
         </div>
      </section>
   );
};

export default Skills;
