import WeatherApp from "./Projects/Weather_App/WeatherApp.js"
import BlockGame from "./Projects/Block Game/Block_Game.js"
import LinkedinPandC from "./Projects/LinkedinPostLiker/Linkedin.js"
import BharatSevaplus from "./Projects/Libraray/Bharat SevaPlus.js"



export default function MyProjects(){



    return(
        <div id="Projects">
            <div className="MyProjects_Heading">
                <h2>PROJECTS</h2>
                <p>This Section Includes Some of My Projects Works I've Done So Far..</p>
            </div>
            <div className="projects_section">
                <BharatSevaplus/>
                <WeatherApp />
                <BlockGame/>
                <LinkedinPandC />
            </div>
        </div>
    )
}