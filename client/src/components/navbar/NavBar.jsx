import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { getImageUrl } from '../../utils';
import { useAuth } from '../../store/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faHome, faBriefcase, faBuilding, faAddressCard, faUser, faToggleOn, faToggleOff, faArrowRight } from '@fortawesome/free-solid-svg-icons'


const NavBar = ({ isSun, toggleTheme }) => {
    const { isLoggedIn } = useAuth()
    console.log("Is loggedin : ", isLoggedIn)
    const [activeLink, setActiveLink] = useState('home');

    const {user} = useAuth()


    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // const fetchUserData = async () => {
    //     try {
    //         const response = await fetch("http://localhost:5175/api/auth/user", {
    //             method: "GET",
    //             headers: {
    //                 "Authorization": token, // Replace with actual auth token
    //                 "Content-Type": "application/json"
    //             }
    //         });
    //         if (response.ok) {
    //             const userData = await response.json();
    //             setUserName(userData.fname); // Assuming user's first name is retrieved
    //         } else {
    //             console.error("Failed to fetch user data");
    //         }
    //     } catch (error) {
    //         console.error("Error fetching user data:", error);
    //     }
    // };


    const bodyBackgroundColor = isSun ? 'black': 'white';
    document.body.style.backgroundColor = bodyBackgroundColor;
    
    const w_nav_link_color = isSun ? styles.w_nav_link_isSun : styles.w_nav_link;
    const sub_menu_color = isSun ? styles.sub_menu_isSun : styles.sub_menu;    
    const sub_menu_link_color = isSun ? styles.sub_menu_link_isSun : styles.sub_menu_link;
    



    
    return (
        <Navbar className={styles.box}>
            <Container className={styles.navbar} >
                <div className={styles.navigation_wrap}>
                    <Navbar.Brand href="\" className={`${styles.logo_link} ${styles.w_nav_brand}`}>
                        <img className={styles.logo_main} alt={getImageUrl("nav/logo.png")} src={getImageUrl("nav/logo.png")} />
                        
                    </Navbar.Brand>

                    <div className={styles.menu}>
                        <Navbar.Collapse id="basic-navbar-nav" role="navigation" className={`${styles.navigation_items} ${styles.w_nav_menu}`}>
                            <Nav className="me-auto">
                                <Link to="/" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`}>
                                    <i></i><i></i>
                                    <span>Home</span>
                                </Link>
                                <Link to="/work" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                    <i></i><i></i>
                                    <span>Work</span>
                                </Link>

                                <Link to="/projects" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                    <i></i><i></i>
                                    <span>Projects</span>
                                </Link>

                                <Link to="/about-us" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                    <i></i><i></i>
                                    <span>About Us</span>
                                </Link>
                                {isLoggedIn ? 
                                (<Link to="/logout" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                    <i></i><i></i>
                                    <span>Log out</span>
                                </Link>)
                                :
                                (<>
                                <Link to="/login" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                    <i></i><i></i>
                                    <span>Log in</span>
                                </Link>
                                <Link to="/sign-up" className={`mx-3 ${styles.navigation_item} ${w_nav_link_color}`} >
                                <i></i><i></i>
                                <span>Register</span>
                                </Link>
                                </>)
                                }
                                
                                <div className={`${styles.navigation_item} ${w_nav_link_color} ${styles.sun}`} onClick={toggleTheme}>
                                    {isSun ? (<FontAwesomeIcon icon={faSun} style={{height: `20px`}}/>)
                                    :
                                    (<FontAwesomeIcon icon={faMoon}  style={{height: `20px`}}/>)
                                    }
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <Navbar.Toggle className={`${styles.menu_button} ${styles.w_nav_button} ${isOpen ? styles.open_menu : ''}`} onClick={toggleMenu}>
                        <img src={getImageUrl("menu.png")} className={styles.menu_icon} alt="" />
                            
                    </Navbar.Toggle>
                    <div className={`${styles.sub_menu_wrap} ${isOpen ? styles.open_menu : ''}`} id={styles.subMenu}>
                                <div className={sub_menu_color}>
                                    <div className={styles.user_info}>
                                        {
                                            isLoggedIn ? 
                                            (<p className={styles.user}>Hi, {user.fname}</p>) : 
                                            (<p className={styles.user}>Guest Mode</p>)
                                        }
                                    </div>
                                    <hr />
                                    <Link to="/" className={sub_menu_link_color}>
                                        <FontAwesomeIcon icon={faHome} />
                                        <p className={styles.list}>Home</p>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                    <Link to="/work" className={sub_menu_link_color}>
                                        <FontAwesomeIcon icon={faBriefcase} />
                                        <p className={styles.list}>Work</p>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                    <Link to="/projects" className={sub_menu_link_color}>
                                        <FontAwesomeIcon icon={faBuilding} />
                                        <p className={styles.list}>Projects</p>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                    <Link to="/about-us" className={sub_menu_link_color}>
                                        <FontAwesomeIcon icon={faAddressCard} />
                                        <p className={styles.list}>About Us</p>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>
                                    <hr />
                                    <div className={sub_menu_link_color}>
                                        {/* <FontAwesomeIcon icon={faMoon} /> */}
                                        {isSun ? (<FontAwesomeIcon icon={faSun} onClick={toggleTheme} />)
                                        :
                                        (<FontAwesomeIcon icon={faMoon} onClick={toggleTheme}/>)
                                        }
                                        {/* <div>{isSun ? <FontAwesomeIcon icon={faSun} onClick={toggleTheme}/> : <FontAwesomeIcon icon={faMoon} onClick={toggleTheme}/>}</div> */}
                                        <p className={styles.list} id={styles.theme} onClick={toggleTheme}>Theme</p>
                                        {isSun ? (<FontAwesomeIcon icon={faToggleOn} onClick={toggleTheme} />)
                                        :
                                        (<FontAwesomeIcon icon={faToggleOff} onClick={toggleTheme}/>)
                                        }
                                    </div>
                                    <hr />

                                    
                                    {isLoggedIn ? 
                                    (<Link to="/logout" className={sub_menu_link_color}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <p className={styles.list}>Log out</p>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>)
                                    :
                                    (<Link to="/login" className={sub_menu_link_color}>
                                        <FontAwesomeIcon icon={faUser} />
                                        <p className={styles.list}>Log in</p>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </Link>)
                                    }
                                    
                                    
                                </div>

                            </div>
                    
                    <Nav.Link href="\contact-us" className={`${styles.button} ${styles.cc_contact_us} ${styles.w_inline_block}`} onClick={() => onUpdateActiveLink('about')}>
                            <i></i><i></i>
                            <span>Contact us</span>
                    </Nav.Link>
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar