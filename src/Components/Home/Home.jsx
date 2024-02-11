
import classes from './Home.module.css';

const Home = () => {

    const handleAboutClick = () => {
        // Scroll to the 650 horizontally of the page when the component is mounted
        window.scrollTo({
            top: 606,
            left: 0,
            behavior: 'smooth'
        });
    };
    
      
    return(
        <div className={classes.home}>
            <div className={classes.homecontent}>
                <div className={classes.homecontentinfo}>
                    {/* <HomeContent/> */}
                    <h5>HELLO, WORLD.</h5>
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