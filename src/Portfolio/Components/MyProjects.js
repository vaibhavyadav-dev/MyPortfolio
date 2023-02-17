import WeatherApp from "./Projects/Weather_App/WeatherApp.js"
import BlockGame from "./Projects/Block Game/Block_Game.js"
import LinkedinPandC from "./Projects/LinkedinPostLiker/Linkedin.js"
import Library from "./Projects/Libraray/Library.js"



export default function MyProjects(){



    return(
        <div>
            <div className="MyProjects_Heading">
                <h2>PROJECTS</h2>
                <p>This Section Includes My Projects Works I've Done So Far..</p>
            </div>
            <div className="projects_section">
                <WeatherApp />
                <BlockGame/>
                <LinkedinPandC />
                <Library/>
            </div>
        </div>
    )
}