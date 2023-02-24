import contact from "../Images/contact.svg"

export default function ContactMe(){



    return(
        <div id="Contact" className="ContactMe">
            <div className="ContactMe_Heading">
                <h3>CONTACT ME</h3>
                <p>Let's Work Together. Tell Me About Your Project</p>
            </div>
            {/* This Section Contains Contact Form */}
            <div className="ContactME_Form">
               <div className="ContactMe_link">
               <a href="mailto:21vaibhav11@gmail.com">Reach Me</a>
               </div>
            </div>
        </div>
    )
}