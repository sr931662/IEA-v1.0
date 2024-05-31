import React, { useEffect, useRef, useContext } from 'react'
import styles from './Carousel.module.css'
import { getImageUrl } from '../../utils'
import { useLocation } from 'react-router-dom'


const Carousel = ({ isSun }) => {

    const location = useLocation();


    const label_color = isSun ? styles.label_isSun : styles.label
    const heading_color = isSun ? styles.heading_isSun : styles.heading
    const comp_color = isSun ? styles.comp_isSun : styles.comp
    const section_heading_color = isSun ? styles.section_heading_isSun : styles.section_heading
    const mat_sec_color = isSun ? styles.mat_sec_isSun : styles.mat_sec
    const para_color = isSun ? styles.paragraph_light_isSun : styles.paragraph_light
    const div_color = isSun? styles.divider_isSun : styles.divider


    return (
      <div className={`${styles.section} ${styles.cc_store_home_wrap}`}>
        {/* header section */}
        <div className={styles.intro_header}>
          <div className={`${styles.intro_content} ${styles.cc_homepage}`}>
            <div className={styles.intro_text}>
              <div className={styles.heading_jumbo}>
                INDRAPRASTHA <br/>ENGINEERS & ARCHITECT
              </div>
              <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
                We bring your dreams into reality.
              </div>
            </div>
            <a href="/about-us" className={`${styles.button} ${styles.cc_jumbo_button} ${styles.cc_jumbo_white} ${styles.w_inline_block}`}>
              <div className={styles.text_block}>Learn More</div>
            </a>
          </div>
        </div>

        {/* Characteristics */}
        <div className={styles.container}>
          <div className={styles.motto_wrap}>
            <div className={`${label_color} ${styles.cc_light}`}>What we believe in</div>
            <div className={styles.heading_jumbo_small}>Transforming Visions to Structures</div>
          </div>
          <div className={div_color}></div>
          <h1 className={heading_color}>Why choose us?</h1>
          <div className={styles.home_content_wrap}>

            <div className={`${styles.w_layout_grid} ${styles.about_grid}`}>
              <div id={styles.w_node__86e64837_0616_515b_4568_76c147234d34_805e9b5d}>
                <div className={styles.home_section_wrap}>
                  <div className={`${label_color} ${styles.cc_light}`}>Experience</div>
                  <h2 className={section_heading_color}>Decades worth experience</h2>
                  <p className={para_color}>With a team of seasoned architects and civil engineers, we bring decades of collective experience to the drawing board. From concept to completion, our professionals are dedicated to delivering projects that exceed expectations.</p>
                </div>
                <a href="/about" className={`${styles.button} ${styles.w_inline_block}`}>
                  <div>Learn More</div>
                </a>
              </div>
              <img src={getImageUrl("experience.jpg")} id={styles.w_node__86e64837_0616_515b_4568_76c147234d3f_805e9b5d} sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 92vw, 758px" width="750px" alt="" className={styles.image}/>
            </div>

            <div className={`${styles.w_layout_grid} ${styles.about_grid} ${styles.cc_about_2}`}>
              <div id={styles.w_node__86e64837_0616_515b_4568_76c147234d41_805e9b5d}>
                <div className={styles.home_section_wrap}>
                  <div className={`${label_color} ${styles.cc_light}`}>Creativity</div>
                  <h2 className={section_heading_color}>Innovative Designs</h2>
                  <p className={para_color}>We understand that every project is unique. Our creative minds thrive on challenges, consistently pushing boundaries to devise custom-tailored solutions that blend functionality, aesthetics, and sustainability.</p>
                </div>
                <a href="/work" className={`${styles.button} ${styles.w_inline_block}`}>
                  <div>Learn More</div>
                </a>
              </div>
              <img src={getImageUrl("Innovative design.jpg")} id={styles.w_node__86e64837_0616_515b_4568_76c147234d4c_805e9b5d} alt="" className={styles.image_2} sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 92vw, 758px" />
            </div>

            <div className={`${styles.w_layout_grid} ${styles.about_grid}`}>
              <div id={styles.w_node__a1fb662b_98e3_9679_28c8_924b14c33495_805e9b5d}>
                <div className={styles.home_section_wrap}>
                  <div className={`${label_color} ${styles.cc_light}`}>Services</div>
                  <h2 className={section_heading_color}>Comprehensive Services</h2>
                  <p className={para_color}>Whether you're envisioning a residential masterpiece, commercial complex, or infrastructure development, we offer a comprehensive suite of architectural and civil engineering services. From initial design sketches to construction management, we've got you covered.</p>
                </div>
                <a href="/about" className={`${styles.button} ${styles.w_inline_block}`}>
                  <div>Learn More</div>
                </a>
              </div>
              <img src={getImageUrl("services.jpg")} id={styles.w_node__a1fb662b_98e3_9679_28c8_924b14c334a0_805e9b5d} alt="" className={styles.image}/>
            </div>

            <div className={`${styles.w_layout_grid} ${styles.about_grid} ${styles.cc_about_2}`}>
              <div id={styles.w_node__b9ca975a_930b_7000_be6a_90f18993e0e8_805e9b5d}>
                <div className={styles.home_section_wrap}>
                  <div className={`${label_color} ${styles.cc_light}`}>Commitment</div>
                  <h2 className={section_heading_color}>Commitment to excellence</h2>
                  <p className={para_color}>At IEA, excellence is not a goal; it's our standard. We adhere to the highest industry standards, integrating the latest technologies and sustainable practices into our projects. Your vision is our blueprint, and our commitment to quality ensures that each project stands as a testament to precision and durability.</p>
                </div>
                <a href="/work" className={`${styles.button} ${styles.w_inline_block}`}>
                  <div>Learn More</div>
                </a>
              </div>
              <img src={getImageUrl("commitment.jpg")} id={styles.w_node__b9ca975a_930b_7000_be6e_90f18993e0f3_805e9b5d} alt="" className={styles.image_2} sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 92vw, 758px" />
            </div>
        
        <div className={div_color}></div>

            <div className={styles.skills_container}>
              <h1 className={heading_color}>Discover the rich palette of construction materials</h1>
              <p className={`${para_color} ${styles.para_mat}`}>We delve into the vibrant tapestry of materials that form the backbone of Indian residential houses and infrastructures. With a heritage spanning millennia, Indian architecture seamlessly blends tradition with innovation, creating structures that stand as testaments to craftsmanship, sustainability, and cultural diversity.</p>
              <div className={`${styles.w_layout_grid} ${mat_sec_color}`}>
                <div id={styles.id_01}>
                  <img src={getImageUrl("concrete-mixer.gif")} alt="" width="50" className={styles.mat_icon} />
                  <h3 >Cement Brands</h3>

                  <div className={`${styles.w_layout_grid} ${styles.companies}`}>
                    <div id={styles.cp_01} className={comp_color}>
                      <a href="https://www.acclimited.com">
                        <img src={getImageUrl("Acc.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_02} className={comp_color}>
                      <a href="https://www.mpbirlacement.com">
                        <img src={getImageUrl("Birla.jpg")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_03} className={comp_color}>
                      <a href="https://www.dalmiacement.com">
                        <img src={getImageUrl("dalmia.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_04} className={comp_color}>
                      <a href="https://www.jkcement.com">
                        <img src={getImageUrl("JK super.jpg")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_05} className={comp_color}>
                      <a href="https://www.ultratechcement.com">
                        <img src={getImageUrl("Ultratech.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_06} className={comp_color}>
                      <a href="https://www.ambujacement.com">
                        <img src={getImageUrl("Ambuja.png")} alt="" id='' />
                      </a>
                    </div>
                  </div>
                </div>

                <div id={styles.id_02}>
                  <img src={getImageUrl("tile.gif")} alt="" width="50" className={styles.mat_icon} />
                  <h3>Tiles Brands</h3>
                  <div className={`${styles.w_layout_grid} ${styles.companies}`}>
                    <div id={styles.cp_01} className={comp_color}>
                      <a href="https://www.kajariaceramics.com">
                        <img src={getImageUrl("kajaria.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_02} className={comp_color}>
                      <a href="https://www.somanyceramics.com">
                        <img src={getImageUrl("Somany.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_03} className={comp_color}>
                      <a href="https://www.johnson-tiles.com">
                        <img src={getImageUrl("Johnson tile.png")} alt="" id='' />
                      </a>
                    </div>
                  </div>
                </div>
                <div id={styles.id_03}>
                  <img src={getImageUrl("circuit-board.gif")} alt="" width="50" className={styles.mat_icon} />
                  <h3>Electronics Brands</h3>

                  <div className={`${styles.w_layout_grid} ${styles.companies}`}>
                    <div id={styles.cp_01} className={comp_color}>
                      <a href="https://www.bajajelectronics.com">
                        <img src={getImageUrl("bajaj.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_02} className={comp_color}>
                      <a href="https://anchor-electronics.com">
                        <img src={getImageUrl("Anchor.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_03} className={comp_color}>
                      <a href="https://www.havells.com">
                        <img src={getImageUrl("Havells.png")} alt="" id='' />
                      </a>
                    </div>
                  </div>
                </div>

                <div id={styles.id_04}>
                  <img src={getImageUrl("sink.gif")} alt="" width="50" className={styles.mat_icon} />
                  <h3>Bathroom Equiment Brands</h3>

                  <div className={`${styles.w_layout_grid} ${styles.companies}`}>
                    <div id={styles.cp_01} className={comp_color}>
                      <a href="https://www.kohler.co.in">
                        <img src={getImageUrl("kohler-logo.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_02} className={comp_color}>
                      <a href="https://www.cera-india.com">
                        <img src={getImageUrl("Cera.png")} alt="" id='' />
                      </a>
                    </div>
                    
                    <div id={styles.cp_03} className={comp_color}>
                      <a href="https://www.somanyceramics.com">
                        <img src={getImageUrl("Somany.png")} alt="" id='' />
                      </a>
                    </div>

                    <div id={styles.cp_04} className={comp_color}>
                      <a href="https://www.jaquar.com">
                        <img src={getImageUrl("jaquarbrandlogo.jpg")} alt="" id='' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>
    )
}

export default Carousel