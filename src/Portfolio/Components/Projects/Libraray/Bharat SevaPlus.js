import { useEffect, useState } from "react"
import BharatSeva from "./BharatSeva.png"
import BharatSeva1 from "./BharatSeva1.png"
import BharatSeva2 from "./BharatSeva2.png"
import BharatSeva3 from "./BharatSeva3.png"
import BharatSeva4 from "./BharatSeva4.png"
import BharatSeva5 from "./BharatSeva5.png"
import BharatSeva6 from "./BharatSeva6.png"
import "./BharatSevaplus.css"



export default function BharatSevaplus() {

    const [IsOK, setIsOk] = useState({
        block: false,
        none: false
    })

    var myIndex = 0;
    function carousel() {
        var i;
        var x = document.getElementsByClassName("ImageContainerBharatSevaproject");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 3000); // Change image every 5 seconds
    }
    useEffect(()=>{
        setTimeout(carousel, 100)
    },[])

    return (
        <div className="Bharatsevaplusprojects_workContainer">
            <div title="Click to View live site" className="bharatsevaImgContainer">
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva}></img></a> <p className="displaytextbhart"> About page</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva1}></img></a> <p className="displaytextbhart">UserInterFace Login Page</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva2}></img></a> <p className="displaytextbhart">User InterFace Dashboard</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva3}></img></a> <p className="displaytextbhart">User InterFace Home</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva4}></img></a> <p className="displaytextbhart">HealthCare InterFace Dashboard</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva5}></img></a> <p className="displaytextbhart">Healthcare Login Portal</p></div>
                <div className="ImageContainerBharatSevaproject"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank" className={`BharatsevaImgestime`}><img src={BharatSeva6}></img></a> <p className="displaytextbhart">HealthCare Registration Page</p></div>
            </div>
            <div className="bharatsevaplus_projects_info">
                <h2>Bharat SevaPlus</h2>
                <p>
                    A WebApps that maintain Records (Patient Health Logs), Make Appointments, and support Video-Text* Messages between patient and Healthcare Professionals.
                </p>
                <p>
                    Tech Stack: MERN, Firebase and several other packages.
                </p>
                <p>
                    Check Out My Blog to know more about this project : <a href="https://statesinshorts.blogspot.com/2023/07/Bharatsevaplus.html" target="__blank" id="gotoblaogbhar">Click Here</a>
                </p>
                <button className="bhtsbtn"><a href="https://bharatsevaplus-user.netlify.app/" target="__blank">Link</a></button>
            </div>
        </div>
    )
}