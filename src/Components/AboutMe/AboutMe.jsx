import profilephoto from '../../Assets/profilephoto.jpeg';

import MyCV from '../../Assets/MostafaElNaggar.pdf';


import classes from './AboutMe.module.css';

const AboutMe = () => {
    return(

        <div className={classes.aboutMe} id='AboutMe'>

            <div className={classes.aboutMeHeader}>
                <h5>About</h5>
                <h1>Let me introduce myself.</h1>
            </div>

            <div className={classes.aboutMeintro}>
                <img src={profilephoto} alt='Mostafa Elnaggar'/>
                <p>
                    Hi! My name is Mostafa Elnaggar. I'm a Web Developer. <br /> 
                    As an accomplished Front-End Developer,
                    I possess a strong focus on crafting engaging user interfaces and optimizing digital experiences.
                    Proficient in HTML, CSS, JavaScript and React.js.
                    My practical experience includes 2-months as a Frontend developer in tasahel company
                    where I gained hands-on experience in software development, front-end development and UX enhancement. <br /> 
                    Eager to leverage this experience, along with academic knowledge and problem-solving skills, <br /> 
                    to significantly contribute to a Front-End Developer
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
                            <span>Frontend Developer</span>
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
                        <li><strong>HTML</strong></li>
                        <li><strong>CSS</strong></li>
                        <li><strong>JavaScript</strong></li>
                        <li><strong>ReactJs</strong></li>
                        <li><strong>BootStrap</strong></li>
                        <li><strong>OOP</strong></li>
                        <li><strong>Data Structure</strong></li>
                        <li><strong>DataBase</strong></li>
                        <li><strong>SQL</strong></li>
                        <li><strong>MUI</strong></li>
                        <li><strong>Java</strong></li>
                        <li><strong>C#</strong></li>
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