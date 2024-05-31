import React from 'react'
import styles from './ShowCase.module.css'

const Showcase = () => {
    return (
        <div className={`${styles.section} ${styles.cc_cta}`}>
            <div className={styles.container}>
                <div className={styles.cta_wrap}>
                    <div>
                        <div className={styles.cta_text}>
                            <div className={styles.heading_jumbo_small}>Want your dreams come true?</div>
                            <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_light}`}>Today is the day to build the infrastructure of your dreams.</div>
                        </div>
                        <a href="/contact" className={`${styles.button} ${styles.cc_jumbo_button} ${styles.w_inline_block}`}>
                            <div>Start Now</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase