import profilephoto from '../../Assets/profilephoto.jpeg';

import MyCV from '../../Assets/MostafaElNaggar.pdf';


import classes from './AboutMe.module.css';

const AboutMe = () => {

    const profileDetails = [
        { label: 'Full Name:', value: 'Mostafa Gamal Lotfy Elnaggar' },
        { label: 'Birth Date:', value: 'October 27, 2001' },
        { label: 'Position:', value: 'Frontend Developer' },
        { label: 'Email:', value: 'Mostafagamal5827@gmail.com' },
    ];

    const skills = [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'ReactJs',
        'BootStrap', 'OOP', 'Data Structure', 'Database', 'SQL', 'Java', 'C#'
    ];


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
                    Proficient in HTML, CSS, JavaScript, TypeScript and React.js.
                    I have gained valuable experience working as a <strong>Front-End Developer at Tasahel</strong>, 
                    where I was responsible for developing and optimizing responsive web applications to enhance user experience. <br /> 
                    Eager to leverage this experience, along with academic knowledge and problem-solving skills,
                    to significantly contribute to a Front-End Developer
                </p>
            </div>

            <div className={classes.aboutMeInfo}>
                <div className={classes.aboutMeInfoProfile}>
                    <h1>Profile</h1>
                    <ul>
                        {profileDetails.map((detail, index) => (
                            <li key={index}>
                                <strong>{detail.label}</strong>
                                <span>{detail.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes.aboutMeInfoSkills}>
                    <h1>Skills</h1>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}><strong>{skill}</strong></li>
                        ))}
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