import React from 'react'
const ContactMe = ({contact}) => {
    return ( 
        <section className="contact section " id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid">
                
                    <div className="contact_info">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">{contact.phone}</span>
                        </div>
                    </div>
                    <div className="contact_info">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">{contact.email}</span>
                        </div>
                    </div>
                    <div className="contact_info">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">{contact.location}</span>
                        </div>
                    </div>

                    <div className="contact_info">
                        <div>
                            <h3 className="contact_title">*Availability to travel</h3>
                            <h3 className="contact_title">*Freelance work</h3>
                        </div>
                    </div>
                
            </div>
        </section>
     );
}
 
export default ContactMe;