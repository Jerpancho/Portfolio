import React from 'react';
import HtmlIcon from './svg/HtmlIcon';
import CssIcon from './svg/CssIcon';
import JsIcon from './svg/JsIcon';
import JqueryIcon from './svg/JqueryIcon';
import ReactIcon from './svg/ReactIcon';
import NodeIcon from './svg/NodeIcon';
import GithubIcon from './svg/GithubIcon';
import NetlifyIcon from './svg/NetlifyIcon';
import PostgresqlIcon from './svg/PostgresqlIcon';
import AndroidIcon from './svg/AndroidIcon';
import VscodeIcon from './svg/VscodeIcon';
import styles from '../css/Skills.module.css';
const Skills = () => {
   return (
      <section className={styles.skills} id='skills'>
         <h1 className={styles.header}>Skills</h1>
         <div>
            <h3 className={styles.headers}>Languages</h3>
            <div className={styles.list}>
               <HtmlIcon />
               <CssIcon />
               <JsIcon />
               <PostgresqlIcon />
            </div>
         </div>
         <div>
            <h3 className={styles.headers}>Libraries and Frameworks</h3>
            <div className={styles.list}>
               <JqueryIcon />
               <ReactIcon />
               <NodeIcon />
            </div>
         </div>
         <div>
            <h3 className={styles.headers}>Tools and Platforms</h3>
            <div className={styles.list}>
               <GithubIcon />
               <NetlifyIcon />
               <AndroidIcon />
               <VscodeIcon />
            </div>
         </div>
      </section>
   );
};

export default Skills;
