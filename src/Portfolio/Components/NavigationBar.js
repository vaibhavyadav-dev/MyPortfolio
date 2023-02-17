import home from "../Images/home.svg"
import aboutme from "../Images/aboutme.svg"
import contact from "../Images/contact.svg"
import download from "../Images/download.svg"
import light_bulb from "../Images/light_bulb.svg"
import blogs from "../Images/blogs.svg"
import VaibhavYadav_Resume from "./Documents/VaibhavYadav_Resume.pdf"


export default function Navigation(){
    return (
    <div>
        <ul className="Nav-items">
            <li><button><img src={home}/>Home</button></li>
            <li><button><img src={aboutme}/>About Me</button></li>
            <li><button><img src={light_bulb}/>My Projects</button></li>
            <li><a href={VaibhavYadav_Resume} download="VaibhavYadav_Resume"><button><img src={download}/>Download My Resume</button></a></li>
            <li><button><img src={contact}/>Contact Me</button></li>
            <li><button><img src={blogs}/>My Blogs</button></li>
        </ul>
    </div>
        )
}