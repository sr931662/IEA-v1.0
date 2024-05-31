import { React } from 'react'
import styles from './about.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <div className={`${styles.section} ${styles.cc_home_wrap}`}>
            <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
                <div className={styles.intro_content}>
                    <div className={styles.heading_jumbo}>About Us<br/></div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.motto_wrap}>
                    <div className={styles.heading_jumbo_small}>Welcome to Indraprastha Engineers and Architects, where passion for design meets commitment to excellence.</div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.about_story_wrap}>
                    <img src={ getImageUrl("Praveen Singh.jpg") } alt="Founder" className={styles.founder}/>
                    <h2 className={styles.header}>About</h2>
                    <p className={styles.paragraph_light}>Welcome to Indraprastha Engineers & Architects, where passion for design meets commitment to excellence. Established with a vision to redefine architectural and civil engineering standards, we take pride in our journey of turning dreams into tangible structures.</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.about_story_wrap}>
                    <h2 className={styles.header}>Our Services</h2>
                    <p className={styles.paragraph_light}>Founded in year 2000, Indraprastha Engineers & Architects emerged from the collective ambition of a group of architects and civil engineers. Fueled by a shared passion for creating spaces that inspire, our founders set out to establish a firm that would blend innovation, sustainability, and precision.<br /><br />Over the years, we've evolved and expanded, but our core values remain unchanged. Every project is an opportunity to showcase our dedication to craftsmanship, attention to detail, and a client-centric approach.</p>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.about_story_wrap}>
                    <h2 className={styles.header}>Our Mission</h2>
                    <p className={styles.paragraph_light}>At Indraprastha Engineers & Architects, our mission is clear: to elevate lives through exceptional design and engineering. We believe that well-designed spaces have the power to enhance the way people live, work, and interact with their environment. Our commitment is not just to build structures but to contribute to the communities they serve.</p>
                </div>
                <div className={styles.divider}></div>
            </div>
        </div>
    )
}

export default About