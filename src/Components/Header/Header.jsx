import React, { useState , useEffect } from 'react';

import logo from '../../Assets/code.png';
import linkedin from '../../Assets/linkedin.png';
import linkedin2 from '../../Assets/linkedin2.png';
import github from '../../Assets/github.png';
import github2 from '../../Assets/github2.png';
import classes from './Header.module.css';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const linkedinUrl = 'https://www.linkedin.com/in/mostafa-elnaggar-074bb91b2/';
    const githubUrl = 'https://github.com/MGElnaggar';
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {     // here you make window when reach 500 ( you set it in the return ) scrollY
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkedinClick = () => {
        window.open(linkedinUrl, '_blank');
    };

    const handleGithubClick = () => {
        window.open(githubUrl, '_blank');
    };

    useEffect(() => {        // to make the navbar to be dropdown in mobile
        const handleResize = () => {
        setIsMobile(window.innerWidth < 900);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const handleAboutClick = () => {
        const aboutMeSection = document.getElementById('AboutMe');
        if (aboutMeSection) {
            aboutMeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById('Projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    const handleContactClick = () => {
        const contactMeSection = document.getElementById('ContactMe');
        if (contactMeSection) {
            contactMeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };


    return(
        <header className={`${classes.header} ${scrollPosition >= 5 ? classes.scrolledHeader : ''}`}>
            <div className={classes.container}>
                <div
                    onClick={handleHomeClick}
                    className={`${classes.logo} ${scrollPosition >= 5 ? classes.scrolledLogo : ''}`}
                >
                    <img src={logo} alt='portfolio' />
                    <p>Mostafa Elnaggar</p>
                </div>

                {!isMobile && (
                    <div className={classes.navbar}>
                        <div className={`${classes.navtags} ${scrollPosition >= 5 ? classes.scrollednavtags : ''}`}>
                            <ul>
                                <li> 
                                    <a
                                        onClick={handleHomeClick}
                                        className={scrollPosition >= 0 && scrollPosition < 500 ? classes.active : ''} 
                                    >Home</a> 
                                </li>
                                <li> 
                                    <a
                                        onClick={handleAboutClick}
                                        className={scrollPosition >= 500 && scrollPosition < 1400 ? classes.active : ''} 
                                    >About</a> 
                                </li>
                                <li> 
                                    <a
                                        onClick={handleProjectsClick}
                                        className={scrollPosition >= 1400 && scrollPosition < 2450 ? classes.active : ''}
                                    >Projects</a>
                                </li>
                                <li> 
                                    <a
                                        onClick={handleContactClick}
                                        className={scrollPosition >= 2450 ? classes.active : ''}
                                    >Contact</a>
                                </li>
                            </ul>
                        </div>
                        <a 
                            className={`${classes.seperator} ${scrollPosition >= 5 ? classes.scrolledSeperator : ''}`}
                        >
                            |
                        </a>
                        <div className={classes.social}>
                            <button onClick={handleLinkedinClick} >
                                <img src={scrollPosition >= 5 ? linkedin2 : linkedin} alt="linkedin" />
                            </button>
                            <button onClick={handleGithubClick} >
                                <img src={scrollPosition >= 5 ? github2 : github} alt="github" />
                            </button>
                        </div>
                    </div>
                )}

                {isMobile && (
                    <div 
                        className={`${classes.mobileMenu} ${scrollPosition >= 5 ? classes.scrolledMobileMenu : ''}`} 
                        onClick={toggleDropdown}
                    >
                        <span className={isDropdownOpen ? classes.closeIcon : classes.hamburgerIcon}>
                            {isDropdownOpen ? '✕' : '≡'}
                        </span>
                    </div>
                )}

                {isMobile && isDropdownOpen && (
                    <div className={classes.mobileNav}>
                        <ul>
                            <li> <a onClick={handleHomeClick}>Home</a> </li>
                            <li> <a onClick={handleAboutClick}>About</a> </li>
                            <li> <a onClick={handleProjectsClick}>Projects</a> </li>
                            <li> <a onClick={handleContactClick}>Contact</a> </li>
                        </ul>
                        <div className={classes.mobileSocial}>
                            <img onClick={handleLinkedinClick} src={linkedin} alt="linkedin" />
                            <img onClick={handleGithubClick} src={github} alt="github" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
};


export default Header;
