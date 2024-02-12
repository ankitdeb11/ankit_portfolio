import React, { useState } from 'react';
import "./qualifications.css"

const Qualifications = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }




  return (

    <section className="qualifications section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Education Background</span>

      <div className="qualifications__container container">
        <div className="qualifications__tabs">
          <div className={toggleState === 1 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualifications__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualifications__button qualifications__active button--flex" : "qualifications__button button--flex"}  onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualifications__icon"></i> Experience
          </div>

        </div>


        <div className="qualifications__sections">


          <div className={toggleState === 1 ? "qualifications__content qualifications__content-active" : "qualifications__content "}>


            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">VIT University</h3>
                <span className="qualifications__subtitle">B. Tech CSE</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt"> </i>
                  2020 - 2024
                </div>
              </div>


              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

            </div>


            <div className="qualifications__data">

              <div>

              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>



              <div>
                <h3 className="qualifications__title">Aakash Jr. College</h3>
                <span className="qualifications__subtitle">Class XII - TSBIE</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt"> </i>
                  2018 - 2020 
                </div>
              </div>



            </div>



            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">SGIS Bangalore</h3>
                <span className="qualifications__subtitle">Class X - CBSE</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt"> </i>
                  2016 - 2018 
                </div>
              </div>


              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

            </div>









          </div>

          <div className={toggleState === 2 ? "qualifications__content qualifications__content-active" : "qualifications__content "}>


            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">App Developer Intern</h3>
                <span className="qualifications__subtitle">PayGRT - INDIA</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt">  </i>
                  July 2022 - Sep 2022
                </div>
              </div>


              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

            </div>


            <div className="qualifications__data">

              <div>

              </div>

              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>



              <div>
                <h3 className="qualifications__title">Visual Effects Editor</h3>
                <span className="qualifications__subtitle">The X Crew - 300K on Socials</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt">  </i>
                  March 2021 - Jan 2022
                </div>
              </div>



            </div>

            <div className="qualifications__data">
              <div>
                <h3 className="qualifications__title">Web Developer</h3>
                <span className="qualifications__subtitle">Self - Learning</span>

                <div className="qualifications__calender">
                  <i class="uil uil-calendar-alt">  </i>
                  2020 - Present
                </div>
              </div>


              <div>
                <span className="qualifications__rounder"></span>
                <span className="qualifications__line"></span>
              </div>

            </div>




            {/* Deleted one of the Q Datas  */}

          </div>

        </div>

      </div>



    </section>
  )
}

export default Qualifications