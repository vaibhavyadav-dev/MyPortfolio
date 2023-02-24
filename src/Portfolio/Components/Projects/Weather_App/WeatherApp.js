import Weatherapp from "./Weatherapp.png"


export default function WeatherApp(){


    return(
            <div className="projects_work">
            <div className="projects_work_imgContainer">
            <a href="https://captaintron.github.io/Weather_App/" target="__blank"><img src={Weatherapp}></img></a>
            </div>
            <div className="projects_info">
                <h4>Weather App</h4>
                <p>Here I've Implemented this App using ReactJS FrameWork With 
                Hooks, REST APIs, Async/Await, into functional Components.
                This is Dynamic App that takes City name as Input and Display 
                5 Days Weather Data, like High Temperature, Low Temperature, Humidity,
                Sunrise Time, Sunset Time with Lattitude and Longitude.
                </p>
                <p>
                    Tech Stack : ReactJS, Javascript, CSS, HTML, REST APIs.
                </p>
                <button><a href="https://github.com/CaptainTron/Weather_App" target="__blank"> Repo Link</a></button>
            </div>
        </div>
    )
}