import github from "./Images/github.svg"
import linkedin from "./Images/linkedin.svg"
import instagram from "./Images/instagram.svg"
import youtube from "./Images/youtube.svg"
import hashnode from "./Images/hashnode.svg"
import time from "./Images/time.svg"
import Thanking from "./Components/Thanking"



export default function Footer(){



    return (
        <div className="FooterSection">
            <div className="Container">
                <div className="Left_container">
                    <h3>Made By </h3>
                    <h2>Vaibhav Yadav</h2>
                    <p>A Front End Developer Who Loves To Web Development</p>
                    <h3>With Love, Time And Curiosity.</h3>
                </div>
                <div className="Right_container">
                    <h3>Get Connected</h3>
                    <div className="SocialMedia_container">
                        <a href="https://www.linkedin.com/in/vaibhav-yadav-4397351b9" target="__blank"><div className="socialLinks"><img src={linkedin}/>Linkedin</div></a>
                        <a href="https://github.com/CaptainTron" target="__blank"><div className="socialLinks"><img src={github}/>GitHub</div></a> 
                        <a href="https://www.instagram.com/penandtablett/"><div className="socialLinks" target="__blank"><img src={instagram}/>Instagram</div></a>
                        <a href="https://www.youtube.com/@user-lj7gt3ch4x"><div className="socialLinks" target="__blank"><img src={youtube}/>YouTube</div></a>
                        <a href="https://develop4you.hashnode.dev/" target="__blank"><div className="socialLinks"><img src={hashnode}/>My Blogs</div></a>
                    </div>
                </div>
            </div>
            <div className="CreatorVaibhav">
                    <hr></hr>
                <Thanking/>

            </div>

        </div>
    )
}