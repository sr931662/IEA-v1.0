import React from 'react'
import styles from './residential.module.css'
import { getImageUrl } from '../../../utils'

const Residential = ({ isSun }) => {
    return(
        <div>
            <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                <div className={styles.project_overview_header}>
                    <div className={styles.intro_content}>
                        <div className={styles.heading_jumbo}>Residential Houses</div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.divider}></div>
                    <div className={`${styles.w_layout_grid} ${styles.project_details_grid}`}>
                        <div id={styles.id_387918}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label : styles.label_isSun}>DESCRIPTION</div>
                                <div className={isSun ? styles.paragraph_light : styles.paragraph_light_isSun}>Welcome to our Residential House Projects Album, where architectural excellence meets the warmth of home. Explore our portfolio of thoughtfully crafted residences, each telling a unique story of design innovation and personalized living. Click on any project to dive into the details and discover what makes each home a masterpiece.</div>
                            </div>
                            
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label : styles.label_isSun}>Explore more Residential House Projects</div>
                                <div className={isSun ? styles.paragraph_light : styles.paragraph_light_isSun}>Click on any project below to explore it's unique features, design elements, and the stories behind the homes. Find inspiration for your dream residence and discover the possibilites of personalized living.</div>
                            </div>

                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label : styles.label_isSun}>Ready to begin your home's story?</div>
                                <div className={isSun ? styles.paragraph_light : styles.paragraph_light_isSun}>If you're ready to embark on the journey of creating your dream home, contact Indraprastha Engineers & Architects. Our team is passionate about turning visions into reality, and we're excited to discuss how we can bring your residential dreams to life.</div>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label : styles.label_isSun}>what's included in our residential house project series?</div>
                                <div className={isSun ? styles.paragraph_light : styles.paragraph_light_isSun}>Our Residential House Projects Series is curated with a focus on : </div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label : styles.sub_label_isSun}>Tailored Designs : </strong><p className={isSun ? styles.sub_li : styles.sub_li_isSun}>Every project is approached with a customized design philosophy, ensuring that each residence reflects the unique preferences and lifestyle of its occupants.</p></li>
                                    <li><strong className={isSun ? styles.sub_label : styles.sub_label_isSun}>Functionality & Aesthetics : </strong><p className={isSun ? styles.sub_li : styles.sub_li_isSun}>We strike the perfect balance between functionality and aesthetics, creating homes that are not only visually stunning but also designed for practical living.</p></li>
                                    <li><strong className={isSun ? styles.sub_label : styles.sub_label_isSun}>Sustainability : </strong><p className={isSun ? styles.sub_li : styles.sub_li_isSun}>Our commitment to sustainable practices is evident in each project. We incorporate eco-friendly materials and enegry-efficient solutions to minimize environmental impact.</p></li>
                                    <li><strong className={isSun ? styles.sub_label : styles.sub_label_isSun}>Client Collaboration : </strong><p className={isSun ? styles.sub_li : styles.sub_li_isSun}>We believe in collaborative design. Our client's input is invaluable, and we work closely with them to bring their visions to life.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={isSun ? styles.container : styles.container_isSun}>
                    <h1>Gallery</h1>
                    <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}>
                        <div id={styles.id_01}>
                            <div className={isSun ? styles.card : styles.card_isSun}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_02}>
                            <div className={isSun ? styles.card : styles.card_isSun}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_03}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_04}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_05}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_06}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_07}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_08}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_09}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_10}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id={styles.id_11}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_12}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_13}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_14}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_15}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_16}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_17}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_18}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_19}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_20}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_21}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_22}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_23}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_24}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_25}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_26}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_27}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_28}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_29}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_30}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_31}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_32}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_33}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_34}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_35}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_36}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_37}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_38}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_39}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_40}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_41}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_42}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_43}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_44}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_45}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_46}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_47}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_48}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_49}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_50}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_51}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_52}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_53}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_54}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_55}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_56}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_57}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_58}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_59}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_60}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_61}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_62}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_63}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_64}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_65}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_66}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_67}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_68}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_69}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_70}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_71}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_72}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_73}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_74}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_75}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_76}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_77}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_78}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_79}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_80}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_81}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_82}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_83}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_84}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_85}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_86}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_87}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_88}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_89}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_90}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_91}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_92}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_93}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_94}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_95}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_96}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_97}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_98}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_99}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_100}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_101}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_102}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_103}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_104}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_105}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_106}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_107}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_108}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_109}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_110}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_111}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_112}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_113}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_114}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_115}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_116}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_117}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_118}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_119}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_120}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_121}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_122}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_123}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_124}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_125}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_126}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_127}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_128}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_129}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_130}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_131}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_132}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_133}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_134}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_135}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_136}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_137}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_138}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_139}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_140}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_141}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_142}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_143}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_144}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_145}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_146}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_147}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_148}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_149}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_150}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_151}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_152}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_153}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_154}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_155}>
                            <div className={styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.divider}></div>
                </div>
            </div>
        </div>
    )
}

{/* <div className={styles.label}>What's included in our Residential House Projects Series?</div>
<div className={styles.paragraph_light}>It includes : </div>
<div className={styles.list}><ul>
    <li>Tailored Designs</li>
    </ul></div> */}

export default Residential