import React from 'react'
import styles from './work_content.module.css'
import { getImageUrl } from '../../../utils'

const Work_content = ({ isSun }) => {
    return(
        <div className={styles.section}>
            <div className={styles.container}>
                {/* Residential House */}
                <div className={isSun ? styles.section_heading_wrap_isSun : styles.section_heading_wrap}>
                    <div className={`${styles.label} ${isSun ? styles.cc_light : styles.cc_light_isSun}`}>Our Work</div>
                    <h2>Team Projects</h2>
                </div>
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\residential-houses" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('resid.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\residential-houses" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #1</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Residential House Projects</div>
                        </div>
                    </div>
                </div>

                {/* Commercial House */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\commercial-houses" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('Innovative design.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\commercial-houses" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #2</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Commercial House Projects</div>
                        </div>
                    </div>
                </div>

                {/* Commercial Infrastructure */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\commercial-infrastructure" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('commercial house.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\commercial-infrastructure" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #3</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Commercial Infrastructure Projects</div>
                        </div>
                    </div>
                </div>
                
                {/* Hospitals */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\hospital" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('hospital.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\hospital" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #4</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Hospital Projects</div>
                        </div>
                    </div>
                </div>

                {/* Land Development */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\land-development" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('land dev.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\land-development" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #5</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Land Development Projects</div>
                        </div>
                    </div>
                </div>

                {/* Flyover Infrastructure */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\flyover-infrastructure" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('flyover.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\flyover-infrastructure" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #6</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Flyover Infrastructure Projects</div>
                        </div>
                    </div>
                </div>

                {/* Educational Institutes */}
                <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                    <div id={styles.id_38cdc}>
                        <a href="\work\educational-institutes" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('edu.jpg')} alt=""  className={styles.project_cover_pic} /></a>
                        <div className={styles.project_name_wrap}>
                            <a href="\work\educational-institutes" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Project #7</a>
                            <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Educational Institute Projects</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default Work_content