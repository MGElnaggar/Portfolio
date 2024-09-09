
import classes from './Home.module.css';

const Home = () => {

    const handleAboutClick = () => {
        window.scrollTo({
            top: 605,
            left: 0,
            behavior: 'smooth'
        });
    };
    
      
    return(
        <div className={classes.home}>
            <div className={classes.homecontent}>
                <div className={classes.homecontentinfo}>
                    <h5>HELLO.</h5>
                    <h1>I'm Mostafa Elnaggar.</h1>
                    <p>
                        <span>Front-end Developer</span>
                    </p>
                    <button onClick={handleAboutClick}>More About Me</button>
                </div>
            </div>
        </div>
    )
};

export default Home;
