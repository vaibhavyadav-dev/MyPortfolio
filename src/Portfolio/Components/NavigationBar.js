import home from "../Images/home.svg"
import aboutme from "../Images/aboutme.svg"
import contact from "../Images/contact.svg"
import download from "../Images/download.svg"
import light_bulb from "../Images/light_bulb.svg"
import blogs from "../Images/blogs.svg"
import VaibhavYadav_Resume from "./Documents/VaibhavYadav_Resume.pdf"
// This one For Hamburger Menu
import Hamburger from "../HamburgerMenu"

export default function Navigation(){
    return (
    <div className="Navigation_container">
        <Hamburger/>
        <ul className="Nav-items">
            <li><a href="#Home"><button><img src={home}/>Home</button></a></li>
            <li><a href="#AboutME"><button><img src={aboutme}/>About Me</button></a></li>
            <li><a href="#Projects"><button><img src={light_bulb}/>My Projects</button></a></li>
            <li><a href="#Blogs"><button><img src={blogs}/>My Blogs</button></a></li>
            <li><a href={VaibhavYadav_Resume} download="VaibhavYadav_Resume"><button><img src={download}/>Download My Resume</button></a></li>
            <li><a href="#Contact"><button><img src={contact}/>Contact Me</button></a></li>
        </ul>
    </div>
        )
}