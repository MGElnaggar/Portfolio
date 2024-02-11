import profilephoto from '../../Assets/profilephoto.jpeg';
import MyCV from '../../Assets/MostafaGamalElnaggar.pdf';

import classes from './AboutMe.module.css';

const AboutMe = () => {
    return(
        <div className={classes.aboutMe}>

            <div className={classes.aboutMeHeader}>
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
            </div>

            <div className={classes.aboutMeintro}>
                <img src={profilephoto} alt='Mostafa Elnaggar'/>
                <p>
                    Hi! My name is Mostafa Elnaggar. I'm a Web Developer. <br /> And i'm very passionate
                    and dedicated to my work. <br /> With a good experience as a professional Web Developer, <br />
                    I have acquried the skills and knowledge necessary <br /> To make your project a success.
                </p>
            </div>

            <div className={classes.aboutMeInfo}>
                <div className={classes.aboutMeInfoProfile}>
                    <h1>Profile</h1>

                    <ul>
                        <li>
                            <strong>Full Name:</strong>
                            <span>Mostafa Gamal Lotfy Elnaggar</span>
                        </li>
                        <li>
                            <strong>Birth Date:</strong>
                            <span>October 27,2001</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>Freelancer, Frontend Developer</span>
                        </li>
                        <li>
                            <strong>Email:  </strong>
                            <span>Mostafagamal5827@gmail.com</span>
                        </li>
                    </ul>

                </div>

                <div className={classes.aboutMeInfoSkills}>
                    <h1>Skills</h1>
                    <ul>
                        <li>
                            <strong>HTML <span>95%</span></strong>
                            <div className={classes.progressBar}>
                                <div className={classes.htmlprogress}></div>
                            </div>
                            {/* <span>95%</span> */}
                        </li>
                        <li>
                            <strong>CSS <span>92%</span></strong>
                            <div className={classes.progressBar}>
                                <div className={classes.cssprogress}></div>
                            </div>
                            
                        </li>
                        <li>
                            <strong>JavaScript <span>88%</span></strong>
                            <div className={classes.progressBar}>
                                <div className={classes.javascriptprogress}></div>
                            </div>
                            
                        </li>
                        <li>
                            <strong>Reactjs <span>85%</span></strong>
                            <div className={classes.progressBar}>
                                <div className={classes.reactjsprogress}></div>
                            </div>
                            
                        </li>
                        <li>
                            <strong>Java <span>60%</span></strong>
                            <div className={classes.progressBar}>
                                <div className={classes.javaprogress}></div>
                            </div>
                            
                        </li>
                    </ul>
                </div>
            </div>

            <div className={classes.cv}>
                <a href={MyCV} download>Download CV</a>
            </div>
       </div>
    )
};

export default AboutMe;