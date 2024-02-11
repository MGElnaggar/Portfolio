import React, { useState } from 'react';

import FoodOrderApp from '../../Assets/FoodOrderApp.png';
import Portfolio from '../../Assets/portfolio.png';
import Movies from '../../Assets/Movies.png';
import Inflow from '../../Assets/INFlow.png';
// import Traveling from '../../Assets/Traveling.png';


import classes from './Projects.module.css';

const Projects = () => {
    
    const [inflowUrl, setInflowUrl] = useState('https://github.com/MGElnaggar/INFlow');
    const [bookingUrl, setBookinfUrl] = useState('https://github.com/MGElnaggar?tab=repositories');
    const [foodOrderUrl, setFoodOrderUrl] = useState('https://github.com/MGElnaggar/Food-Order-App');
    const [moviesUrl, setMoviesUrl] = useState('https://github.com/MGElnaggar/Movies');
    
    const handleINFlowClick = () => {
        window.open(inflowUrl, '_blank');
    };
    const handleBookingClick = () => {
        window.open(bookingUrl, '_blank');
    };
    const handleFoodOrderClick = () => {
        window.open(foodOrderUrl, '_blank');
    };
    const handleMoviesClick = () => {
        window.open(moviesUrl, '_blank');
    };
      
    return(
        <div style={{backgroundColor:'#ebebeb'}}>
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
                        <div className={classes.inflow}>
                            <img src={Inflow} alt="INFlow" />
                            <div className={classes.imgDescription}>
                                <h2>
                                    INFlow <br/>
                                    <p>
                                        Inflow is a mental help web application designed 
                                        to help users accurately diagnose emotional health conditions 
                                        based on the Lüscher Color Test System. 
                                    </p> <br/>
                                    <button onClick={handleINFlowClick}>View Project code</button>
                                </h2>
                            </div>
                        </div>
                        <div className={classes.portfolio}>
                            <img src={Portfolio} alt="Booking and Traveling App" />
                            <div className={classes.imgDescription}>
                                <h2>
                                    My Portfolio <br/>
                                    <p>
                                        This is my portfolio, 
                                        showcasing my expertise and passion for frontend web development. 
                                        Explore my skills and projects to experience innovative solutions 
                                        tailored to enhance user experiences. 
                                    </p> <br/>
                                    <button onClick={handleBookingClick}>View Project Code</button>
                                </h2>
                            </div>
                        </div>
                        <div className={classes.foodOrderApp}>
                            <img src={FoodOrderApp} alt="Food Order App" />
                            <div className={classes.imgDescription}>
                                <h2>
                                    Food Order <br/>
                                    <p>
                                        Food Order App is single-page web app,
                                        that making it easy for users to explore a variety of 
                                        mouth-watering dishes and place their orders with just a few clicks.
                                    </p>  <br/>
                                    <button onClick={handleFoodOrderClick}>View Project code</button>
                                </h2>
                            </div>
                        </div>
                        <div className={classes.movies}>
                            <img src={Movies} alt="Movies" />
                            <div className={classes.imgDescription}>
                                <h2>
                                    Movies <br/>
                                    <p>
                                        managing your movie collection effortlessly.
                                    </p>  <br/>
                                    <button onClick={handleMoviesClick}>View Project code</button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;