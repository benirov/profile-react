import React from 'react'
const Qualifications = ({works, educations}) => {

    const setViewQualification = ((classElement) => {

        let elements = document.querySelectorAll('.qualification_active');
        if(elements.length > 0){
            elements.forEach(x => { 
                 x.classList.remove('qualification_active') 
            });
        }
        console.log('classElement', classElement);
        let setElements = document.querySelectorAll(`.${classElement}`);
        setElements.forEach(x => { 
            x.classList.add('qualification_active') 
        });
    })

    return ( 
        <section className="qualification section">
                <h2 className="section_title ">Qualification</h2>
                <span className="section_subtitle ">My personal journey</span>

                <div className="qualification_container container ">
                    <div className="qualification_tabs ">
                        <div className="qualification_button elementliedu button--flex qualification_active" data-target='#education' onClick={() =>  { setViewQualification(`elementliedu`)}}>
                            <i className="uil uil-graduation-cap qualification_icon "></i>
                            Education
                        </div>
                        <div className="qualification_button elementliwork button--flex" data-target='#work' onClick={() =>  { setViewQualification(`elementliwork`)}}>
                            <i className="uil uil-suitcase qualification_icon "></i>
                            Work
                        </div>
                    </div>
                    <div className="qualification_sections ">
                        <div className="qualification_content elementliedu qualification_active" data-content id='education'>
                            {
                               educations.map((education) => {
                                return (
                                        <div className="qualification_data ">
                                            <div>
                                                <h3 className="qualification_title ">{education.name}</h3>
                                                <span className="qualification_subtitle ">{education.institucion}</span>
                                                <div className="qualification_calendar ">
                                                    <i className="uil uil-schedule "></i>
                                                        &nbsp;{education.year}<br></br>
                                                    <i className="uil uil-location-pin-alt "></i>
                                                        &nbsp;{education.location}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="qualification_rounder "></span>
                                                <span className="qualification_line "></span>
                                            </div>
                                        </div>
                                )
                               }) 
                            }
                        </div>
                        <div className="qualification_content elementliwork" data-content id='work'>
                        {
                            works.experiencie.map((work, i) => {
                                return (
                                <div className="qualification_data ">
                                    { i === 1 ? (<><div></div><div>
                                    <span class="qualification_rounder "></span>
                                    <span class="qualification_line "></span>
                                </div>
                                <div>
                                        <h3 className="qualification_title ">{work.title}</h3>
                                        <span className="qualification_subtitle ">{work.company}</span>
                                        <div className="qualification_calendar ">
                                            <i className="uil uil-schedule "></i>
                                            {work.years}
                                        </div>
                                    </div></>) : (
                                    <>
                                    <div>
                                        <h3 className="qualification_title ">{work.title}</h3>
                                        <span className="qualification_subtitle ">{work.company}</span>
                                        <div className="qualification_calendar ">
                                            <i className="uil uil-schedule "></i>
                                            {work.years}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="qualification_rounder "></span>
                                        <span className="qualification_line "></span>
                                    </div>
                                    </>
                                )}
                                    
                                </div>)
                            })
                        }
                        </div>
                    </div>
                </div>

            </section>
     );
}
 
export default Qualifications;