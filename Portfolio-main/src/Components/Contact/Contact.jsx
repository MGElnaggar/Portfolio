import React from 'react';

import phoneCall from '../../Assets/phoneCall.png';
import mail from '../../Assets/mail.png';
import linkedin2 from '../../Assets/linkedin2.png';

import classes from './Contact.module.css';

const Contact = () => {
    
    const linkedinUrl = 'https://www.linkedin.com/in/mostafa-el-naggar-074bb91b2/';
    
    const handleLinkedinClick = () => {
        window.open(linkedinUrl, '_blank');
    };

    return(

        <div className={classes.contact} id='ContactMe'>
            
            <div className={classes.contactHeader}>
                <h5>Get in touch</h5>
                <h1>I'd Love To Hear From You.</h1>
                <p>
                    Want to get in touch? We'd love to hear from you. 
                    Here's how you can reach us.
                </p>
            </div>

            <div className={classes.contactContent}>
                <div className={classes.mail}>
                    <img src={mail} alt="Mail" />
                    <h2>Email Me At</h2>
                    <p>Mostafagamal5827@gmail.com</p>
                </div>
                <div className={classes.phone}>
                    <img src={phoneCall} alt="Call Me" />
                    <h2>Call Me At</h2>
                    <p>(+20) 1015245188</p>
                </div>
                <div className={classes.linkedIn}>
                    <img src={linkedin2} alt="LinkedIn" />
                    <h2>Message via LinkedIn</h2>
                    <button onClick={handleLinkedinClick}>Here</button>
                </div>
            </div>
        </div>
    )
};

export default Contact;