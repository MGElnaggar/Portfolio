import FoodOrderApp from '../../Assets/FoodOrderApp.png';
import TaskTrack from '../../Assets/todoList.png';
import Furniture from '../../Assets/Furniture.png';
import Inflow from '../../Assets/INFlow.png';

import classes from './Projects.module.css';

const Projects = () => {

    const projectList = [
        {
            title: 'Furniture',
            description: 'Furniture is an online shopping platform dedicated to providing customers with a variety of home essentials.',
            image: Furniture,
            siteLink: 'https://mgelnaggar.github.io/Furniture/',
            codeLink: 'https://github.com/MGElnaggar/Furniture'
        },
        {
            title: 'Order & Eat',
            description: 'Order and Eat App is a web application, making it easy for users to explore a variety of mouth-watering dishes and place their orders with just a few clicks.',
            image: FoodOrderApp,
            siteLink: 'https://mgelnaggar.github.io/Order-And-Eat/',
            codeLink: 'https://github.com/MGElnaggar/Order-And-Eat'
        },
        {
            title: 'INFlow',
            description: 'Inflow is a mental help web application designed to help users accurately diagnose emotional health conditions based on the Lüscher Color Test System.',
            image: Inflow,
            videoLink: 'https://drive.google.com/drive/folders/1yNsxK4bdHYgR89D0iCiU8PA7DVjxHqFo'
        },
        {
            title: 'Task Track',
            description: 'Task Track Application allows users to manage tasks with a dynamic todo list, fetch data using a custom useFetch hook, and register with a validated form, ensuring efficient task tracking and data management. And all done by TypeScript',
            image: TaskTrack,
            siteLink: 'https://mgelnaggar.github.io/Task-Track/',
            codeLink: 'https://github.com/MGElnaggar/Task-Track'
        }
    ];

    return (
        <div style={{ backgroundColor: '#ebebeb' }} id='Projects'>
            <div className={classes.projects}>
                <div className={classes.projectsHeader}>
                    <h5>Projects</h5>
                    <h1>Check Out Some of My Works.</h1>
                    <p>
                        Welcome to my project showcase,
                        where I highlight some of the web development projects
                        I've had the pleasure of working on.
                    </p>
                </div>

                <div className={classes.myprojects}>
                    <div className={classes.myprojectsContent}>
                        {projectList.map((project, index) => (
                            <div className={classes.project} key={index}>
                                <img src={project.image} alt={project.title} />
                                <div className={classes.imgDescription}>
                                    <h2>
                                        {project.title} <br />
                                        <p>{project.description}</p> <br />
                                        {project.siteLink && <button onClick={() => window.open(project.siteLink, '_blank')}>View Site</button>}
                                        {project.codeLink && <button onClick={() => window.open(project.codeLink, '_blank')}>View Code</button>}
                                        {project.videoLink && <button onClick={() => window.open(project.videoLink, '_blank')}>View Video</button>}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <a href="https://github.com/MGElnaggar?tab=repositories" target="_blank" rel="noopener noreferrer">View More Projects</a>

            </div>
        </div>
    );
};

export default Projects;