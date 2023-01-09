import React from 'react';
import styles from '../css/Contacts.module.css';
const Contacts = () => {
   return (
      <section className={styles.contacts} id='contacts'>
         <div className={styles.main}>
            <div className={styles.form}>
               <h2>Send Me A Message</h2>
               <form
                  action='https://formsubmit.co/your@email.com'
                  method='POST'
               >
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

