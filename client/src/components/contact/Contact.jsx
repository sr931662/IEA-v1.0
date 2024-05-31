import React from "react";
import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";


const Contact = () => {
    return(
        <div className={styles.Contact}>
            {/* <div className={styles.intro_header}> */}
                <div className={`${styles.intro_content} ${styles.cc_homepage}`}>
                    <div className={styles.intro_text}>
                        <div className={styles.heading_jumbo}>
                            CONTACT<br/>US
                        </div>
                        <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
                            WE CAN HELP YOU WITH YOUR QUERIES, AND PROJECTS
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Contact