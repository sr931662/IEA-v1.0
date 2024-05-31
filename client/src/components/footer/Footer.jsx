import React from 'react'
import styles from "./Footer.module.css"
import { getImageUrl } from '../../utils'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img src={getImageUrl('nav/logo.png')} className={styles.logo} alt="logo" />
                    <p>Detail about the company motive</p>
                </div>
                <div className={styles.col}>
                    <h3>Office</h3>
                    <p>C-Block</p>
                    <p>Indira nagar, Lucknow</p>
                    <p>Uttar Pradesh, PIN 226016, India</p>
                    <p className={styles.email}>psinghlko1970@gmail.com</p>
                    <h4>+91 - 9415282158</h4>
                </div>
                <div className={styles.col}>
                    <h3>Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/about-us">About us</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

