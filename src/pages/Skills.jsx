import React from 'react'
const Skills = ({skills}) => {

    const seViewSkill = ((classElement) => {
        let elements = document.querySelectorAll('.skills_open');
        
        if(elements.length > 0){

            elements.forEach(x => { 
                if(!x.classList.contains(classElement)){
                    x.classList.remove('skills_open'); x.classList.add('skills_close') 
                }
            });
        }
        
        if(document.querySelector(`.${classElement}`).classList.contains('skills_open')) {
            document.querySelector(`.${classElement}`).classList.remove("skills_open");
            document.querySelector(`.${classElement}`).classList.add("skills_close");
        } else{
            document.querySelector(`.${classElement}`).classList.remove("skills_close");
            document.querySelector(`.${classElement}`).classList.add("skills_open");
        }

    })
    return ( 
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical Level</span>
            <div className="skills_container container grid">
                

                {
                    skills[0].map((skill) => {
                        return (
                                <div className={`elementli${skill.id} skills_content skills_close`} onClick={() =>  { seViewSkill(`elementli${skill.id}`)}} >
                                    <div className="skills_header">
                                        <i className="uil uil-brackets-curly skills_icon"></i>
                                        <div>
                                            <h1 className="skills_title">{skill.name}</h1>
                                            <span className="skills_subtitle">
                                            {skill.experiencie}
                                                </span>
                                        </div>
                                        <i className="uil uil-angle-down skills_arrow"></i>
                                    </div>
                                    <div className="skills_list grid">
                                        {
                                          skill.nameskills.map((habilities) => {
                                            return (
                                                <div className="skills_data">
                                                    <div className="skills_titles">
                                                        <h3 className="skills_name">{habilities}</h3>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            )

                                          })  
                                        }
                                    </div>
                                </div>
                        )
                     })
                }
                
            </div>

                
        </section>
     );
}
 
export default Skills;