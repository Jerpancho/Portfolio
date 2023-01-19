import React from 'react';
import GithubIcon from './svg/GithubIcon';
import LinkedInIcon from './svg/LinkedInIcon';
import styles from '../css/Contacts.module.css';
const Contacts = () => {
   const url = 'https://formsubmit.co/f0b7592137d51c59338dde5bfe6c84fd';

   return (
      <section className={styles.contacts} id='contacts'>
         <div className={styles.main}>
            <div className={styles.form}>
               <h2>
                  Send Me A Message
                  <span>
                     <a
                        href='https://github.com/Jerpancho'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <GithubIcon width='50px' height='50px' />
                     </a>
                     &nbsp;
                     <a
                        href='https://www.linkedin.com/in/jerrold-pancho-b43666200/'
                        target='_blank'
                        rel='noreferrer'
                     >
                        <LinkedInIcon />
                     </a>
                  </span>
               </h2>
               <form action={url} method='POST'>
                  <input
                     type='hidden'
                     name='_next'
                     value='https://jerpancho.github.io/portfolio/'
                  ></input>
                  <input
                     type='text'
                     name='name'
                     placeholder='Full Name'
                     required
                  />
                  <input
                     type='email'
                     name='email'
                     placeholder='Email'
                     required
                  />
                  <textarea
                     name='message'
                     placeholder='Write your message here'
                     rows='15'
                     required
                  ></textarea>
                  <button type='submit'>Send</button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contacts;

