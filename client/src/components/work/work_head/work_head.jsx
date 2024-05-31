import React from "react"
import styles from './work_head.module.css'
import { getImageUrl } from "../../../utils"

const Work_head = () => {
    return (
        <div>
            <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
                    <div className={styles.intro_content}>
                        <div className={styles.heading_jumbo}>
                            Our work<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work_head