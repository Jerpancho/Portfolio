import React, { useRef } from 'react';
import GithubIcon from './svg/GithubIcon';
import LinkedInIcon from './svg/LinkedInIcon';
import styles from '../css/Contacts.module.css';
const Contacts = () => {
   const nameRef = useRef(null);
   const emailRef = useRef(null);
   const messageRef = useRef(null);
   const url = 'https://formsubmit.co/f0b7592137d51c59338dde5bfe6c84fd';

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch(url, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err);
         });
   };
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
               <form method='POST' onSubmit={handleSubmit}>
                  <input
                     ref={nameRef}
                     type='text'
                     name='name'
                     placeholder='Full Name'
                     required
                  />
                  <input
                     ref={emailRef}
                     type='email'
                     name='email'
                     placeholder='Email'
                     required
                  />
                  <textarea
                     ref={messageRef}
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

